import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProgressBar from './common/ProgressBar';
import AudioStatusBar from './common/AudioStatusBar';
import convertToTime from '../utils/convertToTime';
import getDisplayText from '../utils/getDisplayText';
import isPlaylistValid from '../utils/isPlaylistValid';
import bindMethods from '../utils/bindMethods';
import createControlRenderProp from '../factories/createControlRenderProp';

const audioStatusBarStyle = {
  pointerEvents: 'none',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
};

class AudioProgress extends Component {
  constructor (props) {
    super(props);

    bindMethods(this, [
      // bind methods fired on React events
      'handleSeekPreview'
    ]);
  }

  handleSeekPreview (progress) {
    this.props.onSeekPreview(progress * this.props.duration);
  }

  render () {
    const {
      playlist,
      activeTrackIndex,
      currentTime,
      seekPreviewTime,
      seekInProgress,
      duration,
      onSeekComplete
    } = this.props;
    const time = seekInProgress ? seekPreviewTime : currentTime;
    const displayedProgress = duration ? time / duration : 0;
    return (
      <div className="rrap__audio_progress_container">
        <ProgressBar
          className="rrap__audio_progress_bar"
          progressClassName="progress"
          progress={displayedProgress}
          progressDirection="right"
          adjusting={seekInProgress}
          readonly={!isPlaylistValid(playlist)}
          onAdjustProgress={this.handleSeekPreview}
          onAdjustComplete={onSeekComplete}
        />
        <AudioStatusBar
          style={audioStatusBarStyle}
          displayText={getDisplayText(playlist[activeTrackIndex]) || ''}
          displayTime={`${convertToTime(time)} / ${convertToTime(duration)}`}
        />
      </div>
    );
  }
}

AudioProgress.propTypes = {
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
  activeTrackIndex: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  seekPreviewTime: PropTypes.number.isRequired,
  seekInProgress: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  onSeekPreview: PropTypes.func.isRequired,
  onSeekComplete: PropTypes.func.isRequired
};

export const renderAudioProgress = createControlRenderProp(AudioProgress, [
  'playlist',
  'activeTrackIndex',
  'currentTime',
  'seekPreviewTime',
  'seekInProgress',
  'duration',
  'onSeekPreview',
  'onSeekComplete'
]);

export default AudioProgress;
