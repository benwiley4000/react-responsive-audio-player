import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { MediaProgressBar } from '@cassette/components';
import {
  playerContextFilter,
  PlayerPropTypes,
  getDisplayText
} from '@cassette/core';

import MediaStatusBar from './common/MediaStatusBar';
import convertToTime from '../utils/convertToTime';

const mediaStatusBarStyle = {
  pointerEvents: 'none'
};

/**
 * An interactive media progress bar which can be adjusted by dragging, along with a text overlay of the current track metadata and the elapsed time
 */
export class MediaProgress extends PureComponent {
  render() {
    const {
      playlist,
      activeTrackIndex,
      currentTime,
      seekPreviewTime,
      seekInProgress,
      duration
    } = this.props;
    const time = seekInProgress ? seekPreviewTime : currentTime;
    return (
      <div className="cassette__media_progress_container">
        <MediaProgressBar
          className="cassette__media_progress_bar"
          progressClassName="progress"
          progressDirection="right"
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
  duration: PropTypes.number.isRequired
};

export default playerContextFilter(MediaProgress, [
  'playlist',
  'activeTrackIndex',
  'currentTime',
  'seekPreviewTime',
  'seekInProgress',
  'duration'
]);
