import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  PlayerPropTypes,
  convertToNumberWithinIntervalBounds
} from '@cassette/core';

import ProgressBarDisplay from './ProgressBarDisplay';

const noselectStyles = `
cursor: default;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-touch-callout: none;
`;

/**
 * A vertical or horizontal progress bar element which can be manipulated by mouse or touch
 */
export class ProgressBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      adjusting: false
    };

    this.progressContainer = null;

    // bind methods fired on React events
    this.setProgressContainerRef = this.setProgressContainerRef.bind(this);
    this.handleAdjustProgress = this.handleAdjustProgress.bind(this);

    // bind listeners to add on mount and remove on unmount
    this.handleAdjustComplete = this.handleAdjustComplete.bind(this);
  }

  componentDidMount() {
    // add event listeners bound outside the scope of our component
    window.addEventListener('mousemove', this.handleAdjustProgress);
    document.addEventListener('touchmove', this.handleAdjustProgress);
    window.addEventListener('mouseup', this.handleAdjustComplete);
    document.addEventListener('touchend', this.handleAdjustComplete);

    setTimeout(() => {
      const style = document.createElement('style');
      const className = `noselect_${Math.random()
        .toString(16)
        .slice(2, 7)}`;
      style.innerText = `.${className}{${noselectStyles}}`;
      document.body.appendChild(style);
      this.noselectStyleElement = style;
      this.noselectClassName = className;
    });
  }

  componentWillUnmount() {
    // remove event listeners bound outside the scope of our component
    window.removeEventListener('mousemove', this.handleAdjustProgress);
    document.removeEventListener('touchmove', this.handleAdjustProgress);
    window.removeEventListener('mouseup', this.handleAdjustComplete);
    document.removeEventListener('touchend', this.handleAdjustComplete);

    // remove noselect class in case a drag is in progress
    this.toggleNoselect(false);
    if (this.noselectStyleElement) {
      this.noselectStyleElement.parentNode.removeChild(
        this.noselectStyleElement
      );
    }
  }

  setProgressContainerRef(ref) {
    this.progressContainer = ref;
  }

  toggleNoselect(on) {
    document.body.classList[on ? 'add' : 'remove'](this.noselectClassName);
  }

  getProgressFromPageCoordinates(pageX, pageY) {
    const {
      left,
      top,
      width,
      height
    } = this.progressContainer.getBoundingClientRect();
    const { scrollLeft, scrollTop } = document.body;
    switch (this.props.progressDirection) {
      case 'down':
        return (pageY - top - scrollTop) / height;
      case 'left':
        return 1 - (pageX - left - scrollLeft) / width;
      case 'up':
        return 1 - (pageY - top - scrollTop) / height;
      case 'right':
      default:
        return (pageX - left - scrollLeft) / width;
    }
  }

  handleAdjustProgress(event) {
    const { readonly, onAdjustProgress } = this.props;
    const { adjusting } = this.state;
    if (readonly) {
      return;
    }
    // make sure we don't select stuff in the background
    if (event.type === 'mousedown' || event.type === 'touchstart') {
      this.toggleNoselect(true);
    } else if (!adjusting) {
      return;
    }
    /* we don't want mouse handlers to receive the event
     * after touch handlers, so prevent default
     */
    event.preventDefault();
    const isTouch = event.type.slice(0, 5) === 'touch';
    const pageX = isTouch ? event.targetTouches.item(0).pageX : event.pageX;
    const pageY = isTouch ? event.targetTouches.item(0).pageY : event.pageY;
    const progress = this.getProgressFromPageCoordinates(pageX, pageY);
    const progressInBounds = convertToNumberWithinIntervalBounds(
      progress,
      0,
      1
    );
    this.setState({
      adjusting: true
    });
    onAdjustProgress(progressInBounds);
  }

  handleAdjustComplete(event) {
    const { onAdjustComplete } = this.props;
    /* this function is activated when the user lets go of
     * the mouse, so if noselect was applied
     * to the document body, get rid of it.
     */
    this.toggleNoselect(false);
    const { adjusting } = this.state;
    if (!adjusting) {
      return;
    }
    /* we don't want mouse handlers to receive the event
     * after touch handlers, so prevent default
     */
    event.preventDefault();
    this.setState({
      adjusting: false
    });
    onAdjustComplete();
  }

  render() {
    const {
      progressClassName,
      progressStyle,
      progress,
      progressDirection,
      handle,
      ...attributes
    } = this.props;
    delete attributes.readonly;
    delete attributes.onAdjustProgress;
    delete attributes.onAdjustComplete;
    return (
      <ProgressBarDisplay
        {...attributes}
        ref={this.setProgressContainerRef}
        progressClassName={progressClassName}
        progressStyle={progressStyle}
        progress={progress}
        progressDirection={progressDirection}
        handle={handle}
        onMouseDown={this.handleAdjustProgress}
        onTouchStart={this.handleAdjustProgress}
      />
    );
  }
}

ProgressBar.propTypes = {
  progressClassName: PropTypes.string,
  progressStyle: PropTypes.object,
  progress: PropTypes.number.isRequired,
  progressDirection: PlayerPropTypes.progressDirection.isRequired,
  handle: PropTypes.element,
  readonly: PropTypes.bool.isRequired,
  onAdjustProgress: PropTypes.func.isRequired,
  onAdjustComplete: PropTypes.func.isRequired
};

ProgressBar.defaultProps = {
  readonly: false
};

export default ProgressBar;
