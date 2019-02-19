import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  playerContextFilter,
  PlayerPropTypes,
  isPlaylistValid
} from '@cassette/core';

import ProgressBar from './ProgressBar';

/**
 * An enhanced [`ProgressBar`](#progressbar) which uses the surrounding [`playerContext`](#playercontext) to set its own props for `progress`, `readonly`, `onAdjustProgress` and `onSeekComplete`, and accepts all the other props available for `ProgressBar`
 */
export class MediaProgressBar extends PureComponent {
  constructor(props) {
    super(props);

    // bind methods fired on React events
    this.handleSeekPreview = this.handleSeekPreview.bind(this);
    this.handleSeekComplete = this.handleSeekComplete.bind(this);
  }

  handleSeekPreview(progress) {
    this.props.onSeekPreview(progress * this.props.duration);
  }

  handleSeekComplete(progress) {
    this.props.onSeekComplete(progress * this.props.duration);
  }

  render() {
    const {
      playlist,
      currentTime,
      seekPreviewTime,
      seekInProgress,
      duration,
      durationOverride = duration,
      ...attributes
    } = this.props;
    delete attributes.onSeekPreview;
    delete attributes.onSeekComplete;
    const time = seekInProgress ? seekPreviewTime : currentTime;
    const displayedProgress = durationOverride ? time / durationOverride : 0;
    return (
      <ProgressBar
        {...attributes}
        progress={displayedProgress}
        readonly={!isPlaylistValid(playlist)}
        onAdjustProgress={this.handleSeekPreview}
        onAdjustComplete={this.handleSeekComplete}
      />
    );
  }
}

MediaProgressBar.propTypes = {
  playlist: PropTypes.arrayOf(PlayerPropTypes.track.isRequired).isRequired,
  currentTime: PropTypes.number.isRequired,
  seekPreviewTime: PropTypes.number.isRequired,
  seekInProgress: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  onSeekPreview: PropTypes.func.isRequired,
  onSeekComplete: PropTypes.func.isRequired,
  durationOverride: PropTypes.number
};

export default playerContextFilter(MediaProgressBar, [
  'playlist',
  'currentTime',
  'seekPreviewTime',
  'seekInProgress',
  'duration',
  'onSeekPreview',
  'onSeekComplete'
]);
