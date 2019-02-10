import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { MediaProgressBarDisplay } from '@cassette/components';
import {
  playerContextFilter,
  PlayerPropTypes,
  getDisplayText
} from '@cassette/core';

import MediaStatusBar from './common/MediaStatusBar';
import convertToTime from '../utils/convertToTime';

/**
 * A non-interactive version of [`MediaProgress`](#mediaprogress) which always uses the `currentTime` of the playing media (which may differ from the `seekPreviewTime` if your app also displays an interactive seek bar)
 */
export class MediaProgressDisplay extends PureComponent {
  render() {
    const { playlist, activeTrackIndex, currentTime, duration } = this.props;
    return (
      <div className="cassette__media_progress_container">
        <MediaProgressBarDisplay
          className="cassette__media_progress_bar"
          progressClassName="progress"
          progressDirection="right"
        />
        <MediaStatusBar
          displayText={getDisplayText(playlist[activeTrackIndex]) || ''}
          displayTime={`${convertToTime(currentTime)} / ${convertToTime(
            duration
          )}`}
        />
      </div>
    );
  }
}

MediaProgressDisplay.propTypes = {
  playlist: PropTypes.arrayOf(PlayerPropTypes.track.isRequired).isRequired,
  activeTrackIndex: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired
};

export default playerContextFilter(MediaProgressDisplay, [
  'playlist',
  'activeTrackIndex',
  'currentTime',
  'duration'
]);
