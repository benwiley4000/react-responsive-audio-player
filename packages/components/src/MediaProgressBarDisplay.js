import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { playerContextFilter, PlayerPropTypes } from '@cassette/core';

import ProgressBarDisplay from './ProgressBarDisplay';

/**
 * An enhanced [`ProgressBarDisplay`](#progressbardisplay) which uses the surrounding [`playerContext`](#playercontext) to set its own `progress` prop, and accepts all the other props available for `ProgressBarDisplay`
 */
export class MediaProgressBarDisplay extends PureComponent {
  render() {
    const { currentTime, duration, ...attributes } = this.props;
    const progress = duration ? currentTime / duration : 0;
    return <ProgressBarDisplay {...attributes} progress={progress} />;
  }
}

MediaProgressBarDisplay.propTypes = {
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired
};

export default playerContextFilter(MediaProgressBarDisplay, [
  'currentTime',
  'duration'
]);
