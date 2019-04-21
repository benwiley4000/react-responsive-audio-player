import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { playerContextFilter } from '@cassette/core';

import ButtonWrapper from './common/ButtonWrapper';
import classNames from '../utils/classNames';

/**
 * A button which, when clicked, toggles whether the media is paused
 */
export class PlayPauseButton extends PureComponent {
  render() {
    const {
      paused,
      awaitingPlayResume,
      activeTrackIndex,
      onTogglePause,
      onSelectTrackIndex,
      trackIndex = activeTrackIndex
    } = this.props;
    const isCurrent = activeTrackIndex === trackIndex;
    return (
      <ButtonWrapper>
        <button
          type="button"
          className={classNames(
            'cassette__play_pause_button cassette__media_button',
            {
              playing: isCurrent && (!paused || awaitingPlayResume)
            }
          )}
          onClick={
            isCurrent ? onTogglePause : () => onSelectTrackIndex(trackIndex)
          }
        >
          <div className="foreground">
            <div className="left" />
            <div className="right" />
          </div>
        </button>
      </ButtonWrapper>
    );
  }
}

PlayPauseButton.propTypes = {
  paused: PropTypes.bool.isRequired,
  awaitingPlayResume: PropTypes.bool.isRequired,
  activeTrackIndex: PropTypes.number.isRequired,
  onTogglePause: PropTypes.func.isRequired,
  onSelectTrackIndex: PropTypes.func.isRequired,
  /**
   * By default the button controls playback of whichever track is active,
   * but this prop can be specified to make the button control playback of
   * a specific track (for example in a playlist track selection view where
   * each track as a play/pause button next to it)
   */
  trackIndex: PropTypes.number
};

export default playerContextFilter(PlayPauseButton, [
  'paused',
  'awaitingPlayResume',
  'activeTrackIndex',
  'onTogglePause',
  'onSelectTrackIndex'
]);
