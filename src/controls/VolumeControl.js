import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import lifecyclesPolyfill from 'react-lifecycles-compat';

import ProgressBar from './common/ProgressBar';
import getVolumeIconClassName from '../utils/getVolumeIconClassName';
import getVolumeBarDirectionFromPosition from '../utils/getVolumeBarDirectionFromPosition';
import stopPropagation from '../utils/reactStopPropagation';
import bindMethods from '../utils/bindMethods';
import createControlRenderProp from '../factories/createControlRenderProp';

const volumeControlStyle = {
  touchAction: 'none'
};

class VolumeControl extends PureComponent {
  static getDerivedStateFromProps (nextProps, prevState) {
    const { hover, volumeBarPosition } = prevState;
    if (volumeBarPosition && !hover && !nextProps.setVolumeInProgress) {
      return {
        volumeBarPosition: null
      };
    }
    return null;
  }

  constructor (props) {
    super(props);

    this.state = {
      hover: false,
      // null | 'hiddenup' | 'hiddenright' | 'upabove' | 'rightabove' | 'rightbelow'
      volumeBarPosition: null
    };

    this.volumeControlRef = null;
    this.muteToggleRef = null;
    this.volumeBarContainerRef = null;

    bindMethods(this, [
      // bind methods fired on React events
      'setVolumeControlRef',
      'setMuteToggleRef',
      'setVolumeBarContainerRef',
      'handleMouseEnter',
      'handleMouseLeave',

      // bind listeners to add on mount and remove on unmount
      'handleMuteToggleTouchStart'
    ]);
  }

  componentDidMount () {
    /* this should be a normal React listener but there seems to be a bug
     * in React preventing that from working as expected:
     * https://github.com/facebook/react/issues/9809
     */
    this.muteToggleRef.addEventListener(
      'touchstart',
      this.handleMuteToggleTouchStart
    );
    /* since touchstart bubbling from inside this component is canceled
     * we need to manually trigger mouseleave for touch devices
     */
    document.addEventListener('touchstart', this.handleMouseLeave);
  }

  componentDidUpdate () {
    /* if we've applied a hidden class to our volume bar, it's because
     * we need to measure the element dimensions in order to figure out
     * where and in which direction to position it. if there isn't enough
     * vertical space above the control button, then we'll position the
     * bar hidden and left-to-right to measure it again on the next
     * componentDidUpdate. then if there's room we'll place it either
     * above or below (there's no good way to vertically position the
     * volume bar below the control button, so we skip that option).
     * granted - it's certainly not ideal to need to check dom dimensions
     * before placing an element, but a user could have applied unanticipated
     * styles we won't know about unless we check.
     */
    const { volumeBarPosition } = this.state;
    if (
      volumeBarPosition === 'hiddenup' ||
      volumeBarPosition === 'hiddenright'
    ) {
      const volumeControlRect = this.volumeControlRef.getBoundingClientRect();
      const top = volumeControlRect.top;
      const volumeBarContainerHeight = this.volumeBarContainerRef.offsetHeight;
      let newPosition;
      if (volumeBarPosition === 'hiddenup') {
        newPosition = volumeBarContainerHeight <= top ? 'upabove' : 'hiddenright';
      } else {
        if (volumeBarContainerHeight <= top) {
          newPosition = 'rightabove';
        } else {
          const viewportHeight = document.documentElement.clientHeight;
          const bottom = viewportHeight - volumeControlRect.bottom;
          newPosition = volumeBarContainerHeight <= bottom ? 'rightbelow' : null;
        }
      }
      this.setState({
        volumeBarPosition: newPosition
      });
    }
  }

  componentWillUnmount () {
    this.muteToggleRef.removeEventListener(
      'touchstart',
      this.handleMuteToggleTouchStart
    );
    document.removeEventListener('touchstart', this.handleMouseLeave);
  }

  setVolumeControlRef (ref) {
    this.volumeControlRef = ref;
  }

  setMuteToggleRef (ref) {
    this.muteToggleRef = ref;
  }

  setVolumeBarContainerRef (ref) {
    this.volumeBarContainerRef = ref;
  }

  handleMouseEnter () {
    this.setState({
      hover: true,
      volumeBarPosition: this.state.volumeBarPosition || 'hiddenup'
    });
  }

  handleMouseLeave () {
    this.setState({
      hover: false,
      volumeBarPosition: (
        this.props.setVolumeInProgress ? this.state.volumeBarPosition : null
      )
    });
  }

  handleMuteToggleTouchStart (e) {
    if (!this.state.hover) {
      e.preventDefault();
      this.handleMouseEnter();
    }
  }

  renderHandle () {
    return (
      <div className={classNames(
        'handle',
        { highlight: this.props.setVolumeInProgress }
      )}>
        <div />
      </div>
    );
  }

  render () {
    const {
      volume,
      muted,
      setVolumeInProgress,
      onSetVolume,
      onSetVolumeComplete,
      onToggleMuted
    } = this.props;
    const { hover, volumeBarPosition } = this.state;
    return (
      <div
        ref={this.setVolumeControlRef}
        className="rrap__volume_control"
        style={volumeControlStyle}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onTouchStart={stopPropagation}
      >
        <button
          ref={this.setMuteToggleRef}
          className={classNames(
            'button rrap__audio_button',
            { highlight: hover }
          )}
          onClick={onToggleMuted}
        >
          <div className={classNames(
            'foreground',
            getVolumeIconClassName(volume, muted)
          )} />
        </button>
        {volumeBarPosition && (
          <div
            ref={this.setVolumeBarContainerRef}
            className={classNames(
              'rrap__volume_control__volume_bar_container',
              volumeBarPosition
            )}
          >
            <ProgressBar
              className={classNames(
                'rrap__volume_control__volume_bar',
                volumeBarPosition
              )}
              progressClassName="volume"
              progress={muted ? 0 : volume}
              progressDirection={getVolumeBarDirectionFromPosition(volumeBarPosition)}
              handle={this.renderHandle()}
              adjusting={setVolumeInProgress}
              onAdjustProgress={onSetVolume}
              onAdjustComplete={onSetVolumeComplete}
            />
          </div>
        )}
      </div>
    );
  }
}

VolumeControl.propTypes = {
  volume: PropTypes.number.isRequired,
  muted: PropTypes.bool.isRequired,
  setVolumeInProgress: PropTypes.bool.isRequired,
  onSetVolume: PropTypes.func.isRequired,
  onSetVolumeComplete: PropTypes.func.isRequired,
  onToggleMuted: PropTypes.func.isRequired
};

export const renderVolumeControl = createControlRenderProp(VolumeControl, [
  'volume',
  'muted',
  'setVolumeInProgress',
  'onSetVolume',
  'onSetVolumeComplete',
  'onToggleMuted'
]);

lifecyclesPolyfill(VolumeControl);

export default VolumeControl;
