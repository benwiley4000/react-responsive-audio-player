import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FullscreenContext from './FullscreenContext';

const fullscreenStyle = {
  width: '100%',
  height: '100%'
};

/**
 * Wraps an area which should be fullscreen-able
 */
export class FullscreenContextProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false
    };
    this.requestFullscreen = this.requestFullscreen.bind(this);
    this.requestExitFullscreen = this.requestExitFullscreen.bind(this);
    this.handleFullscreenChange = this.handleFullscreenChange.bind(this);
    this.fullscreenElement = null;
  }

  componentDidMount() {
    document.addEventListener('fullscreenchange', this.handleFullscreenChange);
    document.addEventListener(
      'webkitfullscreenchange',
      this.handleFullscreenChange
    );
    document.addEventListener(
      'mozfullscreenchange',
      this.handleFullscreenChange
    );
    document.addEventListener(
      'msfullscreenchange',
      this.handleFullscreenChange
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      'fullscreenchange',
      this.handleFullscreenChange
    );
    document.removeEventListener(
      'webkitfullscreenchange',
      this.handleFullscreenChange
    );
    document.removeEventListener(
      'mozfullscreenchange',
      this.handleFullscreenChange
    );
    document.removeEventListener(
      'msfullscreenchange',
      this.handleFullscreenChange
    );
  }

  requestFullscreen() {
    if (!this.props.fullscreenEnabled) {
      return;
    }
    if (this.fullscreenElement.requestFullscreen) {
      this.fullscreenElement.requestFullscreen();
    } else if (this.fullscreenElement.webkitRequestFullscreen) {
      this.fullscreenElement.webkitRequestFullscreen();
    } else if (this.fullscreenElement.mozRequestFullscreen) {
      this.fullscreenElement.mozRequestFullScreen();
    } else if (this.fullscreenElement.msRequestFullscreen) {
      this.fullscreenElement.msRequestFullscreen();
    }
  }

  requestExitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.mozExitFullscreen();
    }
  }

  handleFullscreenChange() {
    const documentFullscreenElement =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement;
    this.setState({
      fullscreen: documentFullscreenElement === this.fullscreenElement
    });
  }

  getFullscreenContext() {
    const fullscreenContext = {
      fullscreen: this.state.fullscreen,
      requestFullscreen: this.requestFullscreen,
      requestExitFullscreen: this.requestExitFullscreen
    };
    if (
      this.fullscreenContext &&
      fullscreenContext.fullscreen === this.fullscreenContext.fullscreen
    ) {
      // no change
      return this.fullscreenContext;
    }
    return (this.fullscreenContext = fullscreenContext);
  }

  render() {
    const fullscreenContext = this.getFullscreenContext();
    return (
      <div
        ref={elem => (this.fullscreenElement = elem)}
        style={this.state.fullscreen ? fullscreenStyle : undefined}
      >
        <FullscreenContext.Provider value={fullscreenContext}>
          {typeof this.props.children === 'function'
            ? this.props.children(fullscreenContext)
            : this.props.children}
        </FullscreenContext.Provider>
      </div>
    );
  }
}

FullscreenContextProvider.propTypes = {
  /** If set `false`, disables fullscreen for the wrapped area */
  fullscreenEnabled: PropTypes.bool.isRequired,
  /**
   * Either a renderable React node or a render prop function like the
   * one passed into [`FullscreenContextConsumer`](#fullscreencontextconsumer)
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
};

FullscreenContextProvider.defaultProps = {
  fullscreenEnabled: true
};

export default FullscreenContextProvider;
