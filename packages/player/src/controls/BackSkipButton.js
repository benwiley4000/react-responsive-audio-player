import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { playerContextFilter } from '@cassette/core';

import SkipButton from './common/SkipButton';

/**
 * A button which, when clicked, either skips to the previous track in the playlist or to the beginning of the current playing track, depending upon the current elapsed time
 */
export class BackSkipButton extends PureComponent {
  render() {
    return <SkipButton back onClick={this.props.onBackSkip} />;
  }
}

BackSkipButton.propTypes = {
  onBackSkip: PropTypes.func.isRequired
};

export default playerContextFilter(BackSkipButton, ['onBackSkip']);
