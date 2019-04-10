import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { playerContextFilter } from '@cassette/core';

import ProgressBarDisplay from './ProgressBarDisplay';

/**
 * An enhanced [`ProgressBarDisplay`](#progressbardisplay) which uses the surrounding [`playerContext`](#playercontext) to set its own `progress` prop, and accepts all the other props available for `ProgressBarDisplay`
 */
export class MediaProgressBarDisplay extends PureComponent {
  render() {
    const {
      currentTime,
      duration,
      durationOverride = duration,
      ...attributes
    } = this.props;
    const progress = durationOverride ? currentTime / durationOverride : 0;
    return <ProgressBarDisplay {...attributes} progress={progress} />;
  }
}

MediaProgressBarDisplay.propTypes = {
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  /**
   * Sometimes, for example in the case of some media live streams, the
   * duration property from the media element may not match what we want
   * to use in the UI for a progress bar. `durationOverride` can be set
   * if some external data on the media duration is available.
   */
  durationOverride: PropTypes.number
};

export default playerContextFilter(MediaProgressBarDisplay, [
  'currentTime',
  'duration'
]);
