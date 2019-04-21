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
    const {
      playlist,
      activeTrackIndex,
      currentTime,
      duration,
      getDisplayText,
      durationOverride = duration
    } = this.props;
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
            durationOverride
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
  duration: PropTypes.number.isRequired,
  /**
   * Receives a [`track`](#track) object (or `undefined` if none is active)
   * and returns a string of display text
   **/
  getDisplayText: PropTypes.func.isRequired,
  /**
   * Sometimes, for example in the case of some media live streams, the
   * duration property from the media element may not match what we want
   * to use in the UI for progress displays. `durationOverride` can be set
   * if some external data on the media duration is available.
   */
  durationOverride: PropTypes.number
};

MediaProgressDisplay.defaultProps = {
  getDisplayText: getDisplayText
};

export default playerContextFilter(MediaProgressDisplay, [
  'playlist',
  'activeTrackIndex',
  'currentTime',
  'duration'
]);
