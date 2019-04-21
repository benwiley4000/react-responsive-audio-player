import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { playerContextFilter } from '@cassette/core';

import ButtonWrapper from './common/ButtonWrapper';
import getVolumeIconComponent from '../utils/getVolumeIconComponent';
import classNames from '../utils/classNames';

/**
 * A button which, when clicked, toggles whether the media's audio is muted
 */
export class MuteButton extends PureComponent {
  render() {
    const { volume, muted, onToggleMuted } = this.props;
    const VolumeIcon = getVolumeIconComponent(volume, muted);
    return (
      <ButtonWrapper>
        <button
          type="button"
          className={classNames(
            'cassette__material_toggle cassette__media_button cassette__mute_btn',
            { on: !muted }
          )}
          onClick={onToggleMuted}
        >
          <div className="foreground inner">
            <VolumeIcon width="100%" height="100%" />
          </div>
        </button>
      </ButtonWrapper>
    );
  }
}

MuteButton.propTypes = {
  volume: PropTypes.number.isRequired,
  muted: PropTypes.bool.isRequired,
  onToggleMuted: PropTypes.func.isRequired
};

export default playerContextFilter(MuteButton, [
  'volume',
  'muted',
  'onToggleMuted'
]);
