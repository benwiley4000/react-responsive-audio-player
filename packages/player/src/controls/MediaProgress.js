import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ProgressBar } from '@cassette/components';
import {
  playerContextFilter,
  PlayerPropTypes,
  isPlaylistValid
} from '@cassette/core';

import MediaStatusBar from './common/MediaStatusBar';
import convertToTime from '../utils/convertToTime';
import getDisplayText from '../utils/getDisplayText';

const mediaStatusBarStyle = {
  pointerEvents: 'none'
};

/**
 * An interactive media progress bar which can be adjusted by dragging, along with a text overlay of the current track metadata and the elapsed time
 */
export class MediaProgress extends PureComponent {
  constructor(props) {
    super(props);

    // bind methods fired on React events
    this.handleSeekPreview = this.handleSeekPreview.bind(this);
  }

  handleSeekPreview(progress) {
    this.props.onSeekPreview(progress * this.props.duration);
  }

  render() {
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
      <div className="cassette__media_progress_container">
        <ProgressBar
          className="cassette__media_progress_bar"
          progressClassName="progress"
          progress={displayedProgress}
          progressDirection="right"
          readonly={!isPlaylistValid(playlist)}
          onAdjustProgress={this.handleSeekPreview}
          onAdjustComplete={onSeekComplete}
        />
        <MediaStatusBar
          style={mediaStatusBarStyle}
          displayText={getDisplayText(playlist[activeTrackIndex]) || ''}
          displayTime={`${convertToTime(time)} / ${convertToTime(duration)}`}
        />
      </div>
    );
  }
}

MediaProgress.propTypes = {
  playlist: PropTypes.arrayOf(PlayerPropTypes.track.isRequired).isRequired,
  activeTrackIndex: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  seekPreviewTime: PropTypes.number.isRequired,
  seekInProgress: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  onSeekPreview: PropTypes.func.isRequired,
  onSeekComplete: PropTypes.func.isRequired
};

export default playerContextFilter(MediaProgress, [
  'playlist',
  'activeTrackIndex',
  'currentTime',
  'seekPreviewTime',
  'seekInProgress',
  'duration',
  'onSeekPreview',
  'onSeekComplete'
]);
