import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ProgressBarDisplay } from '@cassette/components';
import { playerContextFilter, PlayerPropTypes } from '@cassette/core';

import MediaStatusBar from './common/MediaStatusBar';
import convertToTime from '../utils/convertToTime';
import getDisplayText from '../utils/getDisplayText';

/**
 * A non-interactive version of [`MediaProgress`](#mediaprogress) which always the `currentTime` of the playing media (which may differ from the `seekPreviewTime` if your app also displays an interactive seek bar)
 */
export class MediaProgressDisplay extends PureComponent {
  render() {
    const { playlist, activeTrackIndex, currentTime, duration } = this.props;
    const progress = duration ? currentTime / duration : 0;
    return (
      <div className="cassette__media_progress_container">
        <ProgressBarDisplay
          className="cassette__media_progress_bar"
          progressClassName="progress"
          progress={progress}
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
