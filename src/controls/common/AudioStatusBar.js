import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ResizeObserver from 'resize-observer-polyfill';

import getStatusBarSizeClassName from '../../utils/getStatusBarSizeClassName';
import bindMethods from '../../utils/bindMethods';

class AudioStatusBar extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      elementSizeClassName: null
    };

    this.statusBarRef = null;
    this.statusBarResizeObserver = null;

    bindMethods(this, [
      // bind methods fired on React events
      'setStatusBarRef',

      // bind listeners to add on mount and remove on unmount
      'handleResize'
    ]);
  }

  componentDidMount () {
    this.statusBarResizeObserver = new ResizeObserver(this.handleResize);
    this.statusBarResizeObserver.observe(this.statusBarRef);
  }

  componentWillUnmount() {
    this.statusBarResizeObserver.disconnect();
  }

  setStatusBarRef (ref) {
    this.statusBarRef = ref;
  }

  handleResize (entries) {
    for (const entry of entries) {
      if (entry.target === this.statusBarRef) {
        const { width } = entry.contentRect;
        this.setState({
          elementSizeClassName: getStatusBarSizeClassName(width)
        });
        return;
      }
    }
  }

  render () {
    const { className, style, displayText, displayTime } = this.props;
    return (
      <div
        ref={this.setStatusBarRef}
        className={classNames('rrap__audio_status_bar', className)}
        style={style}
      >
        <div className="rrap__audio_info_marquee">
          <div className={classNames(
            'rrap__audio_info',
            this.state.elementSizeClassName
          )}>
            {displayText}
          </div>
        </div>
        <div className="rrap__audio_time_progress">{displayTime}</div>
      </div>
    );
  }
}

AudioStatusBar.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  displayText: PropTypes.string.isRequired,
  displayTime: PropTypes.string.isRequired
};

export default AudioStatusBar;
