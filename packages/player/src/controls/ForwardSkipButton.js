import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { playerContextFilter } from '@cassette/core';

import SkipButton from './common/SkipButton';

/**
 * A button which, when clicked, skips to the next track in the playlist
 */
export class ForwardSkipButton extends PureComponent {
  render() {
    return <SkipButton onClick={this.props.onForwardSkip} />;
  }
}

ForwardSkipButton.propTypes = {
  onForwardSkip: PropTypes.func.isRequired
};

export default playerContextFilter(ForwardSkipButton, ['onForwardSkip']);
