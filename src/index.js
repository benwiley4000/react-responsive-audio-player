import React from 'react';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import arrayFindIndex from 'array-find-index';
import classNames from 'classnames';

import './index.scss';

const log = console.log.bind(console);
const logError = console.error ? console.error.bind(console) : log;
const logWarning = console.warn ? console.warn.bind(console) : log;

/* converts given number of seconds to standard time display format
 * http://goo.gl/kEvnKn
 */
function convertToTime (number) {
  const mins = Math.floor(number / 60);
  const secs = (number % 60).toFixed();
  return `${ mins < 10 ? '0' : '' }${ mins }:${ secs < 10 ? '0' : '' }${ secs }`;
}

/*
 * AudioPlayer
 *
 * Accepts 'playlist' prop of the form:
 *
 * [{ "url": "./path/to/file.mp3",
 *    "displayText": "ArtistA - Track 1" },
 *  { "url": "https://domain.com/track2.ogg",
 *    "displayText": "ArtistB - Track 2" }]
 *
 * Accepts 'autoplay' prop (true/[false]).
 *
 * Accepts 'autoplayDelayInSeconds' prop (default 0).
 *
 * Accepts 'gapLengthInSeconds' prop (default 0).
 * Specifies gap at end of one track before next
 * track begins (ignored for manual skip).
 *
 * Accepts 'hideBackSkip' prop (default false,
 * hides back skip button if true).
 *
 * Accepts 'hideForwardSkip' prop (default false,
 * hides forward skip button if true).
 *
 * Accepts 'disableSeek' prop (default false,
 * disables seeking through the audio if true).
 *
 * Accepts 'cycle' prop (default true,
 * starts playing at the beginning of the playlist
 * when finished if true).
 *
 * Accepts 'stayOnBackSkipThreshold' prop, default 5,
 * is number of seconds to progress until pressing back skip
 * restarts the current track.
 *
 * Accepts 'style' prop, object, is applied to
 * outermost div (React styles).
 *
 * Accepts 'onMediaEvent' prop, an object used for
 * listening to media events on the underlying audio element.
 *
 * Accepts 'audioElementRef' prop, a function called after
 * the component mounts and before it unmounts with the
 * internally-referenced HTML audio element as its only parameter.
 * Similar to: https://facebook.github.io/react/docs/refs-and-the-dom.html
 */
class AudioPlayer extends React.Component {

  constructor (props) {
    super(props);

    /* true if the user is currently dragging the mouse
     * to seek a new track position
     */
    this.seekInProgress = false;
    // index matching requested track (whether track has loaded or not)
    this.currentTrackIndex = 0;

    this.defaultState = {
      /* activeTrackIndex will change to match
       * this.currentTrackIndex once metadata has loaded
       */
      activeTrackIndex: -1,
      // indicates whether audio player should be paused
      paused: true,
      /* elapsed time for current track, in seconds -
       * DISPLAY ONLY! the actual elapsed time may
       * not match up if we're currently seeking, since
       * the new time is visually previewed before the
       * audio seeks.
       */
      displayedTime: 0
    };

    this.state = this.defaultState;

    // html audio element used for playback
    this.audio = null;
    this.audioProgressContainer = null;
    /* bounding rectangle used for calculating seek
     * position from mouse/touch coordinates
     */
    this.audioProgressBoundingRect = null;
    this.audioProgressResizeObserver = null;

    // event listeners to add on mount and remove on unmount
    this.adjustDisplayedTime = this.adjustDisplayedTime.bind(this);
    this.seekReleaseListener = e => this.seek(e);
    this.resizeListener = () => this.fetchAudioProgressBoundingRect();
    this.audioPlayListener = () => this.setState({ paused: false });
    this.audioPauseListener = () => this.setState({ paused: true });
    this.audioEndListener = () => {
      const gapLengthInSeconds = this.props.gapLengthInSeconds || 0;
      clearTimeout(this.gapLengthTimeout);
      this.gapLengthTimeout = setTimeout(() => this.skipToNextTrack(), gapLengthInSeconds * 1000);
    };
    this.audioStallListener = () => this.togglePause(true);
    this.audioTimeUpdateListener = () => this.handleTimeUpdate();
    this.audioMetadataLoadedListener = () => this.setState({
      activeTrackIndex: this.currentTrackIndex
    });
  }

  componentDidMount () {
    // add event listeners bound outside the scope of our component
    window.addEventListener('mousemove', this.adjustDisplayedTime);
    document.addEventListener('touchmove', this.adjustDisplayedTime);
    window.addEventListener('mouseup', this.seekReleaseListener);
    document.addEventListener('touchend', this.seekReleaseListener);
    this.audioProgressResizeObserver = new ResizeObserver(this.resizeListener);
    this.audioProgressResizeObserver.observe(this.audioProgressContainer);

    const audio = this.audio = document.createElement('audio');

    // add event listeners on the audio element
    audio.preload = 'metadata';
    audio.addEventListener('play', this.audioPlayListener);
    audio.addEventListener('pause', this.audioPauseListener);
    audio.addEventListener('ended', this.audioEndListener);
    audio.addEventListener('stalled', this.audioStallListener);
    audio.addEventListener('timeupdate', this.audioTimeUpdateListener);
    audio.addEventListener('loadedmetadata', this.audioMetadataLoadedListener);
    this.addMediaEventListeners(this.props.onMediaEvent);

    if (this.props.playlist && this.props.playlist.length) {
      this.updateSource();
      if (this.props.autoplay) {
        const delay = this.props.autoplayDelayInSeconds || 0;
        clearTimeout(this.delayTimeout);
        this.delayTimeout = setTimeout(() => this.togglePause(false), delay * 1000);
      }
    }

    if (this.props.audioElementRef) {
      this.props.audioElementRef(audio);
    }
  }

  componentWillUnmount () {
    // remove event listeners bound outside the scope of our component
    window.removeEventListener('mousemove', this.adjustDisplayedTime);
    document.removeEventListener('touchmove', this.adjustDisplayedTime);
    window.removeEventListener('mouseup', this.seekReleaseListener);
    document.removeEventListener('touchend', this.seekReleaseListener);
    this.audioProgressResizeObserver.disconnect();

    // remove event listeners on the audio element
    this.audio.removeEventListener('play', this.audioPlayListener);
    this.audio.removeEventListener('pause', this.audioPauseListener);
    this.audio.removeEventListener('ended', this.audioEndListener);
    this.audio.removeEventListener('stalled', this.audioStallListener);
    this.audio.removeEventListener('timeupdate', this.audioTimeUpdateListener);
    this.audio.removeEventListener('loadedmetadata', this.audioMetadataLoadedListener);
    this.removeMediaEventListeners(this.props.onMediaEvent);
    clearTimeout(this.gapLengthTimeout);
    clearTimeout(this.delayTimeout);

    // pause the audio element before we unmount
    this.audio.pause();

    if (this.props.audioElementRef) {
      this.props.audioElementRef(this.audio);
    }
  }

  componentWillReceiveProps (nextProps) {
    // Update media event listeners that may have changed
    this.removeMediaEventListeners(this.props.onMediaEvent);
    this.addMediaEventListeners(nextProps.onMediaEvent);

    const newPlaylist = nextProps.playlist;
    if (!newPlaylist || !newPlaylist.length) {
      if (this.audio) {
        this.audio.src = '';
      }
      this.currentTrackIndex = 0;
      return this.setState(this.defaultState);
    }

    const oldPlaylist = this.props.playlist;

    const currentTrackUrl = ((oldPlaylist || [])[this.currentTrackIndex] || {}).url;
    this.currentTrackIndex = arrayFindIndex(newPlaylist, track => {
      return track.url && currentTrackUrl === track.url;
    });
    /* if the track we're already playing is in the new playlist, update the
     * activeTrackIndex.
     */
    if (this.currentTrackIndex !== -1) {
      this.setState({
        activeTrackIndex: this.currentTrackIndex
      });
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

  componentDidUpdate () {
    /* if we loaded a new playlist and reset the current track marker, we
     * should load up the first one.
     */
    if (this.audio && this.currentTrackIndex === -1) {
      this.skipToNextTrack(false);
    }
  }

  togglePause (value) {
    if (!this.audio) {
      return;
    }
    const pause = typeof value === 'boolean' ? value : !this.state.paused;
    if (pause) {
      return this.audio.pause();
    }
    if (!this.props.playlist || !this.props.playlist.length) {
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

  skipToNextTrack (shouldPlay) {
    if (!this.audio) {
      return;
    }
    this.audio.pause();
    if (!this.props.playlist || !this.props.playlist.length) {
      return;
    }
    let i = this.currentTrackIndex + 1;
    if (i >= this.props.playlist.length) {
      i = 0;
    }
    this.currentTrackIndex = i;
    this.setState({
      activeTrackIndex: -1,
      displayedTime: 0
    }, () => {
      this.updateSource();
      const shouldPauseOnCycle = (!this.props.cycle && i === 0);
      const shouldPause = shouldPauseOnCycle || (typeof shouldPlay === 'boolean' ? !shouldPlay : false);
      this.togglePause(shouldPause);
    });
  }

  backSkip () {
    if (!this.props.playlist || !this.props.playlist.length) {
      return;
    }
    const audio = this.audio;
    let stayOnBackSkipThreshold = this.props.stayOnBackSkipThreshold;
    if (isNaN(stayOnBackSkipThreshold)) {
      stayOnBackSkipThreshold = 5;
    }
    if (audio.currentTime >= stayOnBackSkipThreshold) {
      return audio.currentTime = 0;
    }
    let i = this.currentTrackIndex - 1;
    if (i < 0) {
      i = this.props.playlist.length - 1;
    }
    this.currentTrackIndex = i - 1;
    this.skipToNextTrack();
  }

  updateSource () {
    this.audio.src = this.props.playlist[this.currentTrackIndex].url;
  }

  fetchAudioProgressBoundingRect () {
    this.audioProgressBoundingRect = this.audioProgressContainer.getBoundingClientRect();
  }

  handleTimeUpdate () {
    if (!this.seekInProgress && this.audio) {
      this.setState({
        displayedTime: this.audio.currentTime
      });
    }
  }

  adjustDisplayedTime (event) {
    if (!this.props.playlist || !this.props.playlist.length || this.props.disableSeek) {
      return;
    }
    // make sure we don't select stuff in the background while seeking
    if (event.type === 'mousedown' || event.type === 'touchstart') {
      this.seekInProgress = true;
      document.body.classList.add('noselect');
    } else if (!this.seekInProgress) {
      return;
    }
    /* we don't want mouse handlers to receive the event
     * after touch handlers if we're seeking.
     */
    event.preventDefault();
    /* Needs to be called here again, because the click handler is bound
	   * at the same time as the ref, so this.audioProgressContainer size
	   * isn't updated yet, since that happens in componentDidMount
     */
    const boundingRect = this.audioProgressContainer.getBoundingClientRect();
    const isTouch = event.type.slice(0, 5) === 'touch';
    const pageX = isTouch ? event.targetTouches.item(0).pageX : event.pageX;
    const position = pageX - boundingRect.left - document.body.scrollLeft;
    const containerWidth = boundingRect.width;
    const progressPercentage = Math.max(0, Math.min(1, position / containerWidth));
    this.setState({
      displayedTime: progressPercentage * this.audio.duration
    });
  }

  seek (event) {
    /* this function is activated when the user lets
     * go of the mouse, so if .noselect was applied
     * to the document body, get rid of it.
     */
    document.body.classList.remove('noselect');
    if (!this.seekInProgress) {
      return;
    }
    /* we don't want mouse handlers to receive the event
     * after touch handlers if we're seeking.
     */
    event.preventDefault();
    this.seekInProgress = false;
    const displayedTime = this.state.displayedTime;
    if (isNaN(displayedTime)) {
      return;
    }
    this.audio.currentTime = displayedTime;
  }

  render () {
    const activeIndex = this.state.activeTrackIndex;
    const displayText = this.props.playlist ? (
      activeIndex < 0 ? null : this.props.playlist[activeIndex].displayText
    ) : 'Please load a playlist';

    const displayedTime = this.state.displayedTime;
    const duration = this.audio && this.audio.duration || 0;

    const elapsedTime = convertToTime(displayedTime);
    const fullTime = convertToTime(duration);
    const timeRatio = `${ elapsedTime } / ${ fullTime }`;

    const progressBarWidth = `${ (displayedTime / duration) * 100 }%`;

    return (
      <div
        id="audio_player"
        className="audio_player"
        title={displayText}
        style={this.props.style}
      >

        <div className="audio_controls">
          <div
            id="skip_button"
            className={classNames('skip_button back audio_button', {
              'hidden': this.props.hideBackSkip
            })}
            onClick={() => this.backSkip()}
          >
            <div className="skip_button_inner">
              <div className="right_facing_triangle"></div>
              <div className="right_facing_triangle"></div>
            </div>
          </div>
          <div
            id="play_pause_button"
            className={classNames('play_pause_button', 'audio_button', {
              'paused': this.state.paused
            })}
            onClick={() => this.togglePause()}
          >
            <div className="play_pause_inner">
              <div className="left"></div>
              <div className="right"></div>
              <div className="triangle_1"></div>
              <div className="triangle_2"></div>
            </div>
          </div>
          <div
            id="skip_button"
            className={classNames('skip_button audio_button', {
              'hidden': this.props.hideForwardSkip
            })}
            onClick={() => this.skipToNextTrack()}
          >
            <div className="skip_button_inner">
              <div className="right_facing_triangle"></div>
              <div className="right_facing_triangle"></div>
            </div>
          </div>
        </div>

        <div
          id="audio_progress_container"
          className="audio_progress_container"
          ref={(ref) => this.audioProgressContainer = ref}
          onMouseDown={this.adjustDisplayedTime}
          onTouchStart={this.adjustDisplayedTime}
        >
          <div
            id="audio_progress"
            className="audio_progress"
            style={{ width: progressBarWidth }}></div>
          <div id="audio_progress_overlay" className="audio_progress_overlay">
            <div className="audio_info_marquee">
              <div id="audio_info" className="audio_info noselect" draggable="false">
                {displayText}
              </div>
            </div>
            <div
              id="audio_time_progress"
              className="audio_time_progress noselect"
              draggable="false"
            >
              {timeRatio}
            </div>
          </div>
        </div>

      </div>
    );
  }

}

AudioPlayer.propTypes = {
  playlist: PropTypes.array,
  autoplay: PropTypes.bool,
  autoplayDelayInSeconds: PropTypes.number,
  gapLengthInSeconds: PropTypes.number,
  hideBackSkip: PropTypes.bool,
  hideForwardSkip: PropTypes.bool,
  cycle: PropTypes.bool,
  disableSeek: PropTypes.bool,
  stayOnBackSkipThreshold: PropTypes.number,
  style: PropTypes.object,
  onMediaEvent: PropTypes.object,
  audioElementRef: PropTypes.func
};

AudioPlayer.defaultProps = {
  cycle: true
};

module.exports = AudioPlayer;
