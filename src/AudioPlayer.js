import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import lifecyclesPolyfill from 'react-lifecycles-compat';

import PlayerContext from './PlayerContext';
import AudioControlBar from './controls/AudioControlBar';
import createCustomAudioElement from './factories/createCustomAudioElement';
import ShuffleManager from './utils/ShuffleManager';
import getSourceList from './utils/getSourceList';
import getTrackSrc from './utils/getTrackSrc';
import findTrackIndexByUrl from './utils/findTrackIndexByUrl';
import isPlaylistValid from './utils/isPlaylistValid';
import getDisplayText from './utils/getDisplayText';
import getRepeatStrategy from './utils/getRepeatStrategy';
import getControlRenderProp from './utils/getControlRenderProp';
import convertToNumberWithinIntervalBounds from './utils/convertToNumberWithinIntervalBounds';
import bindMethods from './utils/bindMethods';
import { addListenersOnObject, removeListenersOnObject } from './utils/listeners';
import { repeatStrategyOptions } from './constants';

import './styles/index.scss';

const log = console.log.bind(console);
const logError = console.error ? console.error.bind(console) : log;
const logWarning = console.warn ? console.warn.bind(console) : log;

let nextControlKey = 0;
function getNextControlKey () {
  return (nextControlKey++).toString();
}

// Existing Media Session API implementations have default handlers
// for play/pause, and may yield unexpected behavior if custom
// play/pause handlers are defined - so let's leave them be.
const supportableMediaSessionActions = [
  'previoustrack',
  'nexttrack',
  'seekbackward',
  'seekforward'
];

const defaultState = {
  // indicates whether audio player should be paused
  paused: true,
  // elapsed time for active track, in seconds
  currentTime: 0,
  // The most recent targeted time, in seconds, for seek preview
  seekPreviewTime: 0,
  /* true if the user is currently dragging the mouse
   * to seek a new track position
   */
  seekInProgress: false,
  /* true if audio was playing when seek previewing began,
   * it was paused, and it should be resumed on seek
   * complete
   */
  awaitingResumeOnSeekComplete: false,
  // the duration in seconds of the loaded track
  duration: 0,
  /* the TimeRanges object representing the buffered sections of the
   * loaded track
   */
  buffered: null,
  /* the TimeRanges object representing the played sections of the
   * loaded track
   */
  played: null,
  // true if the audio is currently stalled pending data buffering
  stalled: false,
  // true if the active track should play on the next componentDidUpdate
  awaitingPlay: false
};

// assumes playlist is valid
function getGoToTrackState (prevState, index, shouldPlay = true) {
  const isNewTrack = prevState.activeTrackIndex !== index;
  return {
    activeTrackIndex: index,
    trackLoading: isNewTrack,
    currentTime: 0,
    loop: isNewTrack ? false : prevState.loop,
    awaitingPlay: Boolean(shouldPlay),
    paused: !shouldPlay
  };
}

class AudioPlayer extends Component {

  constructor (props) {
    super(props);

    this.state = {
      ...defaultState,
      // index matching requested track (whether track has loaded or not)
      activeTrackIndex: convertToNumberWithinIntervalBounds(
        props.startingTrackIndex,
        0
      ),
      // whether we're waiting on loading metadata for the active track
      trackLoading: isPlaylistValid(props.playlist),
      // the current timestamp on the active track in seconds
      currentTime: convertToNumberWithinIntervalBounds(props.startingTime, 0),
      // the latest volume of the audio, between 0 and 1.
      volume: convertToNumberWithinIntervalBounds(props.defaultVolume, 0, 1),
      // true if the audio has been muted
      muted: props.defaultMuted,
      // whether to loop the active track
      loop: props.defaultRepeatStrategy === 'track',
      // true if playlist should continue at start after completion
      cycle: props.defaultRepeatStrategy === 'playlist',
      // whether to randomly pick next track from playlist after one finishes
      shuffle: props.defaultShuffle,
      // Rate at which audio should be played. 1.0 is normal speed.
      playbackRate: props.defaultPlaybackRate,
      // true if user is currently dragging mouse to change the volume
      setVolumeInProgress: false,
      // playlist prop copied to state (for getDerivedStateFromProps)
      __playlist__: props.playlist
    };

    // volume at last time we were unmuted and not actively setting volume
    this.lastStableVolume = this.state.volume;

    // cache of keys to use in controls render
    // (to maintain state in case order changes)
    this.controlKeys = new Map();

    // used to keep track of play history when we are shuffling
    this.shuffler = new ShuffleManager(getSourceList(props.playlist), {
      allowBackShuffle: props.allowBackShuffle
    });

    // html audio element used for playback
    this.audio = null;

    bindMethods(this, [
      // bind methods fired on React events
      'setAudioElementRef',
      'togglePause',
      'selectTrackIndex',
      'forwardSkip',
      'backSkip',
      'seekPreview',
      'seekComplete',
      'setVolume',
      'setVolumeComplete',
      'toggleMuted',
      'toggleShuffle',
      'setRepeatStrategy',
      'setPlaybackRate',

      // bind audio event listeners to add on mount and remove on unmount
      'handleAudioPlay',
      'handleAudioPause',
      'handleAudioSrcchange',
      'handleAudioEnded',
      'handleAudioStalled',
      'handleAudioCanplaythrough',
      'handleAudioTimeupdate',
      'handleAudioLoadedmetadata',
      'handleAudioVolumechange',
      'handleAudioDurationchange',
      'handleAudioProgress',
      'handleAudioLoopchange',
      'handleAudioRatechange'
    ]);
  }

  componentDidMount () {
    const audio = this.audio = createCustomAudioElement(this.audio);

    // initialize audio properties
    audio.currentTime = this.state.currentTime;
    audio.volume = this.state.volume;
    audio.muted = this.state.muted;
    audio.defaultPlaybackRate = this.state.playbackRate;
    audio.playbackRate = this.state.playbackRate;

    // add event listeners on the audio element
    addListenersOnObject(this, audio, [
      ['play', 'handleAudioPlay'],
      ['pause', 'handleAudioPause'],
      ['srcchange', 'handleAudioSrcchange'],
      ['ended', 'handleAudioEnded'],
      ['stalled', 'handleAudioStalled'],
      ['canplaythrough', 'handleAudioCanplaythrough'],
      ['timeupdate', 'handleAudioTimeupdate'],
      ['loadedmetadata', 'handleAudioLoadedmetadata'],
      ['volumechange', 'handleAudioVolumechange'],
      ['durationchange', 'handleAudioDurationchange'],
      ['progress', 'handleAudioProgress'],
      ['loopchange', 'handleAudioLoopchange'],
      ['ratechange', 'handleAudioRatechange']
    ]);
    this.addMediaEventListeners(this.props.onMediaEvent);

    if (isPlaylistValid(this.props.playlist) && this.props.autoplay) {
      clearTimeout(this.delayTimeout);
      this.delayTimeout = setTimeout(() => {
        this.togglePause(false);
      }, this.props.autoplayDelayInSeconds * 1000);
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    const newPlaylist = nextProps.playlist;

    const baseNewState = {
      __playlist__: newPlaylist
    };

    // check if the new playlist is invalid
    if (!isPlaylistValid(newPlaylist)) {
      return {
        ...defaultState,
        ...baseNewState,
        activeTrackIndex: 0,
        trackLoading: false
      };
    }

    // check if the activeTrackIndex doesn't need to be updated
    const activeTrackUrl =
      getTrackSrc(prevState.__playlist__, prevState.activeTrackIndex);
    if (
      activeTrackUrl === getTrackSrc(newPlaylist, prevState.activeTrackIndex)
    ) {
      // our active track index already matches
      return baseNewState;
    }

    /* if the track we're already playing is in the new playlist, update the
     * activeTrackIndex.
     */
    const newTrackIndex = findTrackIndexByUrl(newPlaylist, activeTrackUrl);
    if (newTrackIndex !== -1) {
      return {
        ...baseNewState,
        activeTrackIndex: newTrackIndex
      };
    }

    // if not, then load the first track in the new playlist, and pause.
    return {
      ...baseNewState,
      ...getGoToTrackState(prevState, 0, false)
    };
  }

  componentDidUpdate (prevProps, prevState) {
    // Update media event listeners that may have changed
    this.removeMediaEventListeners(prevProps.onMediaEvent);
    this.addMediaEventListeners(this.props.onMediaEvent);

    this.shuffler.setList(getSourceList(this.props.playlist));
    this.shuffler.setOptions({
      allowBackShuffle: this.props.allowBackShuffle
    });

    if (
      !this.state.shuffle &&
      (
        getTrackSrc(this.props.playlist, this.state.activeTrackIndex) !==
        getTrackSrc(prevProps.playlist, prevState.activeTrackIndex)
      )
    ) {
      // after toggling off shuffle, we defer clearing the shuffle
      // history until we actually change tracks - if the user quickly toggles
      // shuffle off then back on again, we don't want to have lost our history.
      this.shuffler.clear();
    }

    if (prevProps !== this.props && !this.audio.paused) {
      // update running media session based on new props
      this.stealMediaSession();
    }

    if (
      this.state.activeTrackIndex !== prevState.activeTrackIndex &&
      typeof this.props.onActiveTrackUpdate === 'function'
    ) {
      this.props.onActiveTrackUpdate(this.state.activeTrackIndex);
    }

    if (this.state.awaitingPlay) {
      this.setState({
        awaitingPlay: false
      });
      this.togglePause(false);
    }
  }

  componentWillUnmount () {
    const { audio } = this;
    // remove event listeners on the audio element
    removeListenersOnObject(this, audio, [
      ['play', 'handleAudioPlay'],
      ['pause', 'handleAudioPause'],
      ['srcchange', 'handleAudioSrcchange'],
      ['ended', 'handleAudioEnded'],
      ['stalled', 'handleAudioStalled'],
      ['canplaythrough', 'handleAudioCanplaythrough'],
      ['timeupdate', 'handleAudioTimeupdate'],
      ['loadedmetadata', 'handleAudioLoadedmetadata'],
      ['volumechange', 'handleAudioVolumechange'],
      ['durationchange', 'handleAudioDurationchange'],
      ['progress', 'handleAudioProgress'],
      ['loopchange', 'handleAudioLoopchange'],
      ['ratechange', 'handleAudioRatechange']
    ]);
    removeMediaEventListeners(this.props.onMediaEvent);

    clearTimeout(this.gapLengthTimeout);
    clearTimeout(this.delayTimeout);

    // pause the audio element before we unmount
    audio.pause();
  }

  setAudioElementRef (ref) {
    this.audio = ref;
    if (typeof this.props.audioElementRef === 'function') {
      this.props.audioElementRef(ref);
    }
  }

  addMediaEventListeners (mediaEvents) {
    if (!mediaEvents) {
      return;
    }
    Object.keys(mediaEvents).forEach((type) => {
      if (typeof mediaEvents[type] !== 'function') {
        return;
      }
      this.audio.addEventListener(type, mediaEvents[type]);
    });
  }

  removeMediaEventListeners (mediaEvents) {
    if (!mediaEvents) {
      return;
    }
    Object.keys(mediaEvents).forEach((type) => {
      if (typeof mediaEvents[type] !== 'function') {
        return;
      }
      this.audio.removeEventListener(type, mediaEvents[type]);
    });
  }

  stealMediaSession () {
    if (!(window.MediaSession && navigator.mediaSession instanceof MediaSession)) {
      return;
    }
    navigator.mediaSession.metadata = new MediaMetadata(
      this.props.playlist[this.state.activeTrackIndex]
    );
    supportableMediaSessionActions.map(action => {
      if (this.props.supportedMediaSessionActions.indexOf(action) === -1) {
        return null;
      }
      const seekLength = this.props.mediaSessionSeekLengthInSeconds;
      switch (action) {
        case 'play':
          return this.togglePause.bind(this, false);
        case 'pause':
          return this.togglePause.bind(this, true);
        case 'previoustrack':
          return this.backSkip;
        case 'nexttrack':
          return this.forwardSkip;
        case 'seekbackward':
          return () => this.audio.currentTime -= seekLength;
        case 'seekforward':
          return () => this.audio.currentTime += seekLength;
        default:
          return undefined;
      }
    }).forEach((handler, i) => {
      navigator.mediaSession.setActionHandler(
        supportableMediaSessionActions[i],
        handler
      );
    });
  }

  handleAudioPlay () {
    this.setState(state => state.paused === false ? null : ({ paused: false }));
    this.stealMediaSession();
  }

  handleAudioPause () {
    this.setState(state => state.paused === true ? null : ({ paused: true }));
  }

  handleAudioSrcchange () {
    const { maintainPlaybackRate, playlist } = this.props;
    if (maintainPlaybackRate) {
      this.audio.playbackRate = this.state.playbackRate;
    }
    if (!isPlaylistValid(playlist)) {
      if (this.audio.src.replace(location.href, '') !== '') {
        this.audio.src = '';
      }
      return;
    }
    const activeTrackUrl = getTrackSrc(playlist, this.state.activeTrackIndex);
    const newSrc = this.audio.src;
    if (activeTrackUrl === newSrc) {
      // we're good! nothing to update.
      return;
    }
    // looks like 'src' was set from outside our component. let's
    // see if we can use it or if we have to reset it.
    const newTrackIndex = findTrackIndexByUrl(playlist, newSrc);
    if (newTrackIndex === -1) {
      // this isn't in our playlist - use our latest state
      // to try to preserve everything how it was.
      this.audio.src = activeTrackUrl;
      this.audio.currentTime = this.state.currentTime;
      this.audio.playbackRate = this.state.playbackRate;
      this.audio[this.state.paused ? 'pause' : 'play']();
      logError(
        `Source '${newSrc}' does not exist in the loaded playlist. ` +
        `Make sure you've updated the 'playlist' prop to AudioPlayer ` +
        `before you select this track!`
      );
      return;
    }
    this.selectTrackIndex(newTrackIndex);
  }

  handleAudioEnded () {
    clearTimeout(this.gapLengthTimeout);
    const { playlist, loadFirstTrackOnPlaylistComplete } = this.props;
    if (!isPlaylistValid(playlist)) {
      return;
    }
    const { cycle, activeTrackIndex } = this.state;
    if (!cycle && activeTrackIndex + 1 >= playlist.length) {
      if (loadFirstTrackOnPlaylistComplete) {
        this.goToTrack(0, false);
      }
      return;
    }
    this.gapLengthTimeout = setTimeout(
      this.forwardSkip,
      this.props.gapLengthInSeconds * 1000
    );
  }

  handleAudioStalled () {
    this.setState(state => state.stalled === true ? null : ({ stalled: true }));
  }

  handleAudioCanplaythrough () {
    this.setState(state =>
      state.stalled === false
        ? null
        : ({ stalled: false })
    );
  }

  handleAudioTimeupdate () {
    const { currentTime, played } = this.audio;
    this.setState({ currentTime, played });
  }

  handleAudioLoadedmetadata () {
    this.setState(state =>
      state.trackLoading === false
        ? null
        : ({ trackLoading: false })
    );
  }

  handleAudioVolumechange () {
    const { volume, muted } = this.audio;
    this.setState({ volume, muted });
  }

  handleAudioDurationchange () {
    const { duration } = this.audio;
    this.setState({ duration });
  }

  handleAudioProgress () {
    const { buffered } = this.audio;
    this.setState({ buffered });
  }

  handleAudioLoopchange () {
    const { loop } = this.audio;
    this.setState(state => state.loop === loop ? null : ({ loop }));
  }

  handleAudioRatechange () {
    const { playbackRate } = this.audio;
    this.setState(state =>
      state.playbackRate === playbackRate
        ? null
        : ({ playbackRate })
    );
  }

  togglePause (value) {
    const pause = typeof value === 'boolean' ? value : !this.state.paused;
    if (pause) {
      this.audio.pause();
      return;
    }
    if (!this.audio.src) {
      return;
    }
    try {
      this.audio.play();
    } catch (error) {
      logError(error);
      const warningMessage =
        'Audio playback failed at ' +
        new Date().toLocaleTimeString() +
        '! (Perhaps autoplay is disabled in this browser.)';
      logWarning(warningMessage);
    }
  }

  // assumes playlist is valid - don't call without checking
  goToTrack (index, shouldPlay = true) {
    this.setState(state => getGoToTrackState(state, index, shouldPlay));
  }

  selectTrackIndex (index) {
    const { playlist } = this.props;
    if (!isPlaylistValid(playlist)) {
      return;
    }
    if (index < 0 || index > playlist.length) {
      logWarning(`Playlist index ${index} is out of bounds!`);
      return;
    }
    if (this.state.shuffle) {
      this.shuffler.pickNextItem(index, this.state.activeTrackIndex);
    }
    this.goToTrack(index);
  }

  backSkip () {
    const { playlist, stayOnBackSkipThreshold } = this.props;
    const { audio } = this;
    const { cycle, activeTrackIndex, shuffle } = this.state;
    if (
      !isPlaylistValid(playlist) ||
      audio.currentTime >= stayOnBackSkipThreshold ||
      (!cycle && activeTrackIndex < 1)
    ) {
      audio.currentTime = 0;
      return;
    }
    let index;
    if (shuffle) {
      const previousItem = this.shuffler.findPreviousItem(activeTrackIndex);
      if (previousItem === undefined) {
        // if we aren't allowing backShuffle then we'll hit a stopping point.
        audio.currentTime = 0;
        return;
      }
      index = findTrackIndexByUrl(playlist, previousItem);
    } else {
      index = activeTrackIndex - 1;
      if (index < 0) {
        index = playlist.length - 1;
      }
    }
    this.goToTrack(index);
  }

  forwardSkip () {
    const { playlist } = this.props;
    const { cycle, activeTrackIndex, shuffle } = this.state;
    if (
      !isPlaylistValid(playlist) ||
      (!cycle && activeTrackIndex + 1 >= playlist.length)
    ) {
      return;
    }
    let index;
    if (shuffle) {
      index = findTrackIndexByUrl(
        playlist,
        this.shuffler.findNextItem(activeTrackIndex)
      );
    } else {
      index = activeTrackIndex + 1;
      if (index >= playlist.length) {
        index = 0;
      }
    }
    this.goToTrack(index);
  }

  seekPreview (targetTime) {
    if (!isPlaylistValid(this.props.playlist)) {
      return;
    }
    const { paused, awaitingResumeOnSeekComplete } = this.state;
    if (!paused && this.props.pauseOnSeekPreview && !awaitingResumeOnSeekComplete) {
      this.setState({
        awaitingResumeOnSeekComplete: true
      });
      this.togglePause(true);
    }
    this.setState({
      seekPreviewTime: targetTime,
      seekInProgress: true
    });
  }

  seekComplete () {
    const { seekPreviewTime, awaitingResumeOnSeekComplete } = this.state;
    this.setState({
      seekInProgress: false,
    });
    if (isNaN(seekPreviewTime)) {
      return;
    }
    this.setState({
      /* we'll update currentTime on the audio listener hook anyway,
       * but the optimistic update helps avoid a visual glitch in
       * the progress bar, if seekInProgress changes before currentTime.
       */
      currentTime: seekPreviewTime
    });
    const { audio } = this;
    audio.currentTime = seekPreviewTime;
    if (awaitingResumeOnSeekComplete) {
      this.togglePause(false);
      this.setState({
        awaitingResumeOnSeekComplete: false
      });
    }
  }

  setVolume (volume) {
    if (!this.state.setVolumeInProgress) {
      this.setState({
        setVolumeInProgress: true
      });
    }
    const volumeInBounds = convertToNumberWithinIntervalBounds(volume, 0, 1);
    this.audio.muted = volumeInBounds === 0 ? true : false;
    this.audio.volume = volumeInBounds;
  }

  setVolumeComplete () {
    this.setState({
      setVolumeInProgress: false
    });
    if (!this.audio.muted) {
      this.lastStableVolume = this.audio.volume;
    }
  }

  toggleMuted (value) {
    const muted = typeof value === 'boolean' ? value : !this.state.muted;
    this.audio.muted = muted;
    if (!muted) {
      this.audio.volume = this.lastStableVolume;
    }
  }

  toggleShuffle (value) {
    const shuffle = typeof value === 'boolean' ? value : !this.state.shuffle;
    this.setState({ shuffle });
    if (typeof this.props.onShuffleUpdate === 'function') {
      this.props.onShuffleUpdate(shuffle);
    }
  }

  setRepeatStrategy (repeatStrategy) {
    if (repeatStrategyOptions.indexOf(repeatStrategy) === -1) {
      logWarning(
        'repeatStrategy "' + repeatStrategy + '" is not one of: ' +
        repeatStrategyOptions.split(', ') + '.'
      );
      return;
    }
    const prevRepeatStrategy = getRepeatStrategy(
      this.state.loop,
      this.state.cycle
    );
    this.setState(() => {
      switch (repeatStrategy) {
        case 'track':
          return {
            loop: true
          };
        case 'playlist':
          return {
            loop: false,
            cycle: true
          };
        case 'none':
          return {
            loop: false,
            cycle: false
          };
        default:
          return null;
      }
    });
    if (
      typeof this.props.onRepeatStrategyUpdate === 'function' &&
      prevRepeatStrategy !== repeatStrategy
    ) {
      this.props.onRepeatStrategyUpdate(repeatStrategy);
    }
  }

  setPlaybackRate (rate) {
    this.audio.playbackRate = rate;
  }

  getControlProps () {
    const { props, state } = this;
    return {
      playlist: props.playlist,
      activeTrackIndex: state.activeTrackIndex,
      trackLoading: state.trackLoading,
      paused: state.paused,
      currentTime: state.currentTime,
      seekPreviewTime: state.seekPreviewTime,
      seekInProgress: state.seekInProgress,
      awaitingResumeOnSeekComplete: state.awaitingResumeOnSeekComplete,
      duration: state.duration,
      buffered: state.buffered,
      played: state.played,
      volume: state.volume,
      muted: state.muted,
      shuffle: state.shuffle,
      stalled: state.stalled,
      playbackRate: state.playbackRate,
      setVolumeInProgress: state.setVolumeInProgress,
      repeatStrategy: getRepeatStrategy(state.loop, state.cycle),
      onTogglePause: this.togglePause,
      onSelectTrackIndex: this.selectTrackIndex,
      onBackSkip: this.backSkip,
      onForwardSkip: this.forwardSkip,
      onSeekPreview: this.seekPreview,
      onSeekComplete: this.seekComplete,
      onSetVolume: this.setVolume,
      onSetVolumeComplete: this.setVolumeComplete,
      onToggleMuted: this.toggleMuted,
      onToggleShuffle: this.toggleShuffle,
      onSetRepeatStrategy: this.setRepeatStrategy,
      onSetPlaybackRate: this.setPlaybackRate
    };
  }

  getKeyedChildren (elements) {
    // counts of rendered elements by type
    const elementsRendered = new Map();

    return elements.map(element => {
      // support React | Preact | Inferno
      const type = element.type || element.nodeName || element.tag || '';

      // index within list of keys by type
      const keyIndex = elementsRendered.get(type) || 0;
      elementsRendered.set(type, keyIndex + 1);

      const keysForType = this.controlKeys.get(type) || [];

      let key;
      if (keysForType[keyIndex]) {
        key = keysForType[keyIndex];
      } else {
        key = getNextControlKey();
        this.controlKeys.set(type, keysForType.concat(key));
      }

      return element && React.cloneElement(element, { key });
    });
  }

  render () {
    const hasChildren = Boolean(React.Children.count(this.props.children));
    const ControlWrapper = this.props.controlWrapper;
    return (
      <div style={this.props.style}>
        <audio
          ref={this.setAudioElementRef}
          src={getTrackSrc(this.props.playlist, this.state.activeTrackIndex)}
          crossOrigin={this.props.crossOrigin}
          preload="metadata"
          loop={this.state.loop}
        />
        <PlayerContext.Provider value={this.getControlProps()}>
          {hasChildren && this.props.children}
          {!hasChildren && (
            <ControlWrapper
              title={this.props.getDisplayText(
                this.props.playlist[this.state.activeTrackIndex]
              )}
            >
              <PlayerContext.Consumer>
                {controlProps => this.getKeyedChildren(
                  this.props.controls.map((control, index) => {
                    const renderControl = getControlRenderProp(control);
                    return renderControl && renderControl(controlProps);
                  })
                )}
              </PlayerContext.Consumer>
            </ControlWrapper>
          )}
        </PlayerContext.Provider>
      </div>
    );
  }

}

AudioPlayer.propTypes = {
  playlist: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string,
    album: PropTypes.string,
    artwork: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      sizes: PropTypes.string,
      type: PropTypes.string
    })),
    meta: PropTypes.object
  }).isRequired),
  controls: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([
      'playpause',
      'backskip',
      'forwardskip',
      'volume',
      'repeat',
      'shuffle',
      'progress',
      'progressdisplay',
      'spacer'
    ])
  ]).isRequired),
  controlWrapper: PropTypes.func,
  autoplay: PropTypes.bool,
  autoplayDelayInSeconds: PropTypes.number,
  gapLengthInSeconds: PropTypes.number,
  crossOrigin: PropTypes.oneOf(['anonymous', 'use-credentials']),
  defaultVolume: PropTypes.number,
  defaultMuted: PropTypes.bool,
  defaultRepeatStrategy: PropTypes.oneOf(repeatStrategyOptions),
  defaultShuffle: PropTypes.bool,
  defaultPlaybackRate: PropTypes.number,
  startingTime: PropTypes.number,
  startingTrackIndex: PropTypes.number,
  loadFirstTrackOnPlaylistComplete: PropTypes.bool,
  pauseOnSeekPreview: PropTypes.bool,
  allowBackShuffle: PropTypes.bool,
  stayOnBackSkipThreshold: PropTypes.number,
  supportedMediaSessionActions: PropTypes.arrayOf(PropTypes.oneOf([
    'play',
    'pause',
    'previoustrack',
    'nexttrack',
    'seekbackward',
    'seekforward'
  ]).isRequired).isRequired,
  mediaSessionSeekLengthInSeconds: PropTypes.number.isRequired,
  getDisplayText: PropTypes.func.isRequired,
  style: PropTypes.object,
  onActiveTrackUpdate: PropTypes.func,
  onRepeatStrategyUpdate: PropTypes.func,
  onShuffleUpdate: PropTypes.func,
  onMediaEvent: PropTypes.objectOf(PropTypes.func.isRequired),
  audioElementRef: PropTypes.func
};

AudioPlayer.defaultProps = {
  controls: [
    'spacer',
    'backskip',
    'playpause',
    'forwardskip',
    'spacer',
    'progress'
  ],
  controlWrapper: AudioControlBar,
  autoplay: false,
  autoplayDelayInSeconds: 0,
  gapLengthInSeconds: 0,
  defaultVolume: 1,
  defaultMuted: false,
  defaultRepeatStrategy: 'playlist',
  defaultShuffle: false,
  defaultPlaybackRate: 1,
  startingTime: 0,
  startingTrackIndex: 0,
  loadFirstTrackOnPlaylistComplete: true,
  pauseOnSeekPreview: false,
  maintainPlaybackRate: false,
  allowBackShuffle: false,
  stayOnBackSkipThreshold: 5,
  supportedMediaSessionActions: [
    'play',
    'pause',
    'previoustrack',
    'nexttrack'
  ],
  mediaSessionSeekLengthInSeconds: 10,
  getDisplayText: getDisplayText
};

lifecyclesPolyfill(AudioPlayer);

export default AudioPlayer;
