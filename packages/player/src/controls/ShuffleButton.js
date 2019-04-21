import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ShuffleIcon from 'svg-react-loader?name=ShuffleIcon!material-design-icons/av/svg/design/ic_shuffle_48px.svg?';

import { playerContextFilter } from '@cassette/core';

import ButtonWrapper from './common/ButtonWrapper';
import classNames from '../utils/classNames';

/**
 * A button which, when clicked, toggles whether the playlist is being played in specified order or in shuffle order
 */
export class ShuffleButton extends PureComponent {
  render() {
    const { shuffle, onToggleShuffle } = this.props;
    return (
      <ButtonWrapper>
        <button
          type="button"
          className={classNames(
            'cassette__material_toggle cassette__media_button cassette__shuffle_btn',
            { on: shuffle }
          )}
          onClick={onToggleShuffle}
        >
          <div className="inner foreground">
            <ShuffleIcon width="100%" height="100%" />
          </div>
        </button>
      </ButtonWrapper>
    );
  }
}

ShuffleButton.propTypes = {
  shuffle: PropTypes.bool.isRequired,
  onToggleShuffle: PropTypes.func.isRequired
};

export default playerContextFilter(ShuffleButton, [
  'shuffle',
  'onToggleShuffle'
]);
