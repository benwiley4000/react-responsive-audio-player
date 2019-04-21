import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { MaybeMarquee } from '@cassette/components';

export class MediaStatusBar extends PureComponent {
  render() {
    const { style, displayText, displayTime } = this.props;
    return (
      <div className="cassette__media_status_bar" style={style}>
        <div className="cassette__media_info_marquee">
          <MaybeMarquee content={displayText} />
        </div>
        <div className="cassette__media_time_progress">{displayTime}</div>
      </div>
    );
  }
}

MediaStatusBar.propTypes = {
  style: PropTypes.object,
  displayText: PropTypes.string.isRequired,
  displayTime: PropTypes.string.isRequired
};

export default MediaStatusBar;
