import React, { PureComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { PlayerPropTypes } from '@cassette/core';

import getProgressStyle from './utils/getProgressStyle';
import getHandleStyle from './utils/getHandleStyle';

/**
 * A non-interactive version of [`ProgressBar`](#progressbar)
 */
export class ProgressBarDisplay extends PureComponent {
  render() {
    const {
      progressClassName,
      progressStyle,
      progress,
      progressDirection,
      handle,
      progressBarRef,
      ...attributes
    } = this.props;
    return (
      <div {...attributes} ref={progressBarRef}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            touchAction: 'none'
          }}
        >
          <div
            className={progressClassName}
            style={{
              ...(progressStyle || {}),
              ...getProgressStyle(progress, progressDirection)
            }}
          />
          {handle && (
            <div style={getHandleStyle(progress, progressDirection)}>
              {handle}
            </div>
          )}
        </div>
      </div>
    );
  }
}

ProgressBarDisplay.propTypes = {
  progressClassName: PropTypes.string,
  progressStyle: PropTypes.object,
  progress: PropTypes.number.isRequired,
  progressDirection: PlayerPropTypes.progressDirection.isRequired,
  handle: PropTypes.element
};

export default forwardRef((props, ref) => {
  return <ProgressBarDisplay {...props} progressBarRef={ref} />;
});
