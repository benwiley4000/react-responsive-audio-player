import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';

import {
  playerContextFilter,
  PlayerPropTypes,
  logWarning
} from '@cassette/core';

// 'x:y' -> x / y
function extractAspectRatio(aspectRatio) {
  const values = aspectRatio.split(':').map(Number);
  return values[0] / values[1];
}

const defaultBgColor = '#000';

class InjectedCanvas extends Component {
  componentDidMount() {
    this.div.appendChild(this.props.canvas);
  }

  render() {
    return (
      <div
        style={{ width: this.props.containerWidth }}
        ref={elem => (this.div = elem)}
      />
    );
  }
}

InjectedCanvas.propTypes = {
  containerWidth: PropTypes.number,
  canvas: PropTypes.instanceOf(
    typeof HTMLCanvasElement === 'undefined' ? Object : HTMLCanvasElement
  )
};

/**
 * A container for the video content from the surrounding [`playerContext`](#playercontext)
 */
export class VideoDisplay extends PureComponent {
  constructor(props) {
    super(props);
    // using instance properties instead of React state to make sure
    // we can avoid annoying race conditions
    this.containerWidth = 0;
    this.containerHeight = 0;
    this.hostedVideo = null;
    this.videoFrameAtTimeLastVacated = null;
  }

  componentDidMount() {
    this.containerResizeObserver = new ResizeObserver(
      this.handleContainerResize.bind(this)
    );
    this.containerResizeObserver.observe(this.containerElement);

    this.props.registerVideoHostElement(this.containerElement, {
      onHostOccupied: videoElement => {
        videoElement.style.width = `${this.containerWidth}px`;
        videoElement.style.maxHeight = `${this.containerHeight}px`;
        this.hostedVideo = videoElement;
        this.forceUpdate();
      },
      onHostVacated: videoElement => {
        // TODO: take into account container size and pixel density
        // when sizing videoFrame canvas element?
        const videoFrame = document.createElement('canvas');
        videoFrame.width = videoElement.videoWidth;
        videoFrame.height = videoElement.videoHeight;
        videoFrame
          .getContext('2d')
          .drawImage(videoElement, 0, 0, videoFrame.width, videoFrame.height);
        videoFrame.style.maxWidth = '100%';
        // 'vertical-align: middle' avoids unneeded 3px buffer below canvas
        videoFrame.style.verticalAlign = 'middle';
        this.videoFrameAtTimeLastVacated = videoFrame;
        this.hostedVideo = null;
        this.forceUpdate();
      }
    });
    this.props.renderVideoIntoHostElement(this.containerElement);
  }

  componentWillUnmount() {
    if (this.containerResizeObserver) {
      this.containerResizeObserver.disconnect();
    }
    this.props.unregisterVideoHostElement(this.containerElement);
  }

  handleContainerResize() {
    const { offsetWidth, offsetHeight } = this.containerElement;
    if (
      offsetWidth === this.containerWidth &&
      offsetHeight === this.containerHeight
    ) {
      return;
    }

    if (this.hostedVideo) {
      this.hostedVideo.style.width = `${offsetWidth}px`;
      this.hostedVideo.style.maxHeight = `${offsetHeight}px`;
    }
    this.containerWidth = offsetWidth;
    this.containerHeight = offsetHeight;
    this.forceUpdate();
  }

  render() {
    const {
      aspectRatio,
      fullscreen,
      maintainAspectRatioInFullscreen,
      renderPlaceholderContent,
      renderVideoIntoHostElement,
      ...attributes
    } = this.props;
    delete attributes.registerVideoHostElement;
    delete attributes.unregisterVideoHostElement;

    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: defaultBgColor,
      ...(attributes.style || {})
    };
    if (
      aspectRatio &&
      this.containerWidth &&
      (!fullscreen || maintainAspectRatioInFullscreen)
    ) {
      if (containerStyle.height && !this.warnedAboutStyleOverride) {
        logWarning(
          'VideoDisplay cannot use style.height prop because it is ' +
            'overridden by aspectRatio.'
        );
        this.warnedAboutStyleOverride = true;
      }
      // h = w/(x/y)  -->  h*(x/y) = w  -->  x/y = w/h
      containerStyle.height =
        this.containerWidth / extractAspectRatio(aspectRatio);
    }

    return (
      <div
        {...attributes}
        style={containerStyle}
        ref={elem => (this.containerElement = elem)}
      >
        {this.hostedVideo
          ? null
          : renderPlaceholderContent({
              containerWidth: this.containerWidth,
              containerHeight: this.containerHeight,
              stealVideo: () =>
                renderVideoIntoHostElement(this.containerElement),
              renderLastShownFrame: () =>
                this.videoFrameAtTimeLastVacated && (
                  <InjectedCanvas
                    canvas={this.videoFrameAtTimeLastVacated}
                    containerWidth={this.containerWidth}
                  />
                )
            })}
      </div>
    );
  }
}

VideoDisplay.propTypes = {
  registerVideoHostElement: PropTypes.func.isRequired,
  renderVideoIntoHostElement: PropTypes.func.isRequired,
  unregisterVideoHostElement: PropTypes.func.isRequired,
  fullscreen: PropTypes.bool,
  aspectRatio: PlayerPropTypes.aspectRatio,
  maintainAspectRatioInFullscreen: PropTypes.bool.isRequired,
  renderPlaceholderContent: PropTypes.func.isRequired
};

VideoDisplay.defaultProps = {
  aspectRatio: '16:9',
  maintainAspectRatioInFullscreen: false,
  renderPlaceholderContent(params) {
    const { containerWidth, containerHeight, renderLastShownFrame } = params;
    return (
      <div
        style={{
          width: containerWidth,
          height: containerHeight,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {renderLastShownFrame()}
      </div>
    );
  }
};

export default playerContextFilter(VideoDisplay, [
  'registerVideoHostElement',
  'renderVideoIntoHostElement',
  'unregisterVideoHostElement',
  'fullscreen'
]);
