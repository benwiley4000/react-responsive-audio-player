import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  PlayerPropTypes,
  convertToNumberWithinIntervalBounds
} from '@cassette/core';

import ProgressBarDisplay from './ProgressBarDisplay';
import observeProgressBarRect from './utils/observeProgressBarRect';

const noselectStyles = `
cursor: default;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-touch-callout: none;
`;

const arrowLeft = 37;
const arrowRight = 39;
const arrowUp = 38;
const arrowDown = 40;

/**
 * A vertical or horizontal progress bar element which can be manipulated by mouse or touch
 */
export class ProgressBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      adjusting: false,
      // used while adjusting
      tempProgress: null
    };

    this.progressContainer = null;

    // bind methods fired on React events
    this.setProgressContainerRef = this.setProgressContainerRef.bind(this);
    this.handleAdjustProgress = this.handleAdjustProgress.bind(this);
    this.handleAdjustComplete = this.handleAdjustComplete.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    // add event listeners bound outside the scope of our component
    window.addEventListener('mousemove', this.handleAdjustProgress);
    document.addEventListener('touchmove', this.handleAdjustProgress);
    window.addEventListener('mouseup', this.handleAdjustComplete);
    document.addEventListener('touchend', this.handleAdjustComplete);

    this.unobserve = observeProgressBarRect(this.progressContainer, rect => {
      this.cachedContainerRect = rect;
    });

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

  componentDidUpdate(prevProps, prevState) {
    const { adjusting, tempProgress } = this.state;
    if (adjusting && tempProgress !== prevState.tempProgress) {
      this.props.onAdjustProgress(tempProgress);
    }
  }

  componentWillUnmount() {
    // remove event listeners bound outside the scope of our component
    window.removeEventListener('mousemove', this.handleAdjustProgress);
    document.removeEventListener('touchmove', this.handleAdjustProgress);
    window.removeEventListener('mouseup', this.handleAdjustComplete);
    document.removeEventListener('touchend', this.handleAdjustComplete);

    this.unobserve();

    // remove noselect class in case a drag is in progress
    this.toggleNoselect(false);
    // noselectStyleElement might not exist if the component unmounts
    // before the timeout callback is called.
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
    const { pageLeft, pageTop, width, height } = this.cachedContainerRect;
    switch (this.props.progressDirection) {
      case 'down':
        return (pageY - pageTop) / height;
      case 'left':
        return 1 - (pageX - pageLeft) / width;
      case 'up':
        return 1 - (pageY - pageTop) / height;
      case 'right':
      default:
        return (pageX - pageLeft) / width;
    }
  }

  handleAdjustProgress(event) {
    if (this.props.readonly) {
      return;
    }
    // make sure we don't select stuff in the background
    if (event.type === 'mousedown' || event.type === 'touchstart') {
      this.toggleNoselect(true);
    } else if (!this.state.adjusting) {
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
      adjusting: true,
      tempProgress: progressInBounds
    });
  }

  handleAdjustComplete(event) {
    const { onAdjustComplete } = this.props;
    /* this function is activated when the user lets go of
     * the mouse, so if noselect was applied
     * to the document body, get rid of it.
     */
    this.toggleNoselect(false);
    const { adjusting, tempProgress } = this.state;
    if (!adjusting) {
      return;
    }
    /* we don't want mouse handlers to receive the event
     * after touch handlers, so prevent default
     */
    event.preventDefault();
    this.setState({
      adjusting: false,
      tempProgress: null
    });
    onAdjustComplete(tempProgress);
  }

  handleKeyDown(event) {
    if (this.props.readonly) {
      return;
    }
    let newProgress = this.props.progress;
    switch (event.keyCode) {
      case arrowLeft:
      case arrowDown:
        newProgress -= 0.01;
        break;
      case arrowUp:
      case arrowRight:
        newProgress += 0.01;
        break;
      default:
        return;
    }
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    this.setState({
      adjusting: true,
      tempProgress: convertToNumberWithinIntervalBounds(newProgress, 0, 1)
    });
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
    const { adjusting, tempProgress } = this.state;
    delete attributes.readonly;
    delete attributes.onAdjustProgress;
    delete attributes.onAdjustComplete;
    return (
      <ProgressBarDisplay
        tabIndex={0}
        {...attributes}
        role="slider"
        ref={this.setProgressContainerRef}
        progressClassName={progressClassName}
        progressStyle={progressStyle}
        progress={adjusting ? tempProgress : progress}
        progressDirection={progressDirection}
        handle={handle}
        onMouseDown={this.handleAdjustProgress}
        onTouchStart={this.handleAdjustProgress}
        onKeyDown={e => {
          const { progress, onAdjustComplete } = this.props;
          const arrowLeft = 37;
          const arrowRight = 39;
          const arrowUp = 38;
          const arrowDown = 40;
          switch (e.keyCode) {
            case arrowLeft:
            case arrowDown:
              e.preventDefault();
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
              onAdjustComplete(progress - 0.01);
              break;
            case arrowUp:
            case arrowRight:
              e.preventDefault();
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
              onAdjustComplete(progress + 0.01);
              break;
          }
        }}
        onKeyUp={this.handleAdjustComplete}
        onBlur={this.handleAdjustComplete}
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
