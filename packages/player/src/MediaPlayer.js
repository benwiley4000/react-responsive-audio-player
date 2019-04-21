import React, { Component } from 'react';

import {
  PlayerContextProvider,
  FullscreenContextProvider
} from '@cassette/core';

import MediaPlayerControls from './MediaPlayerControls';

/**
 * A media player component which plays a provided playlist of media
 */
export class MediaPlayer extends Component {
  render() {
    const {
      getDisplayText,
      controls,
      showVideo,
      renderVideoDisplay,
      fullscreenEnabled,
      ...rest
    } = this.props;
    return (
      <FullscreenContextProvider fullscreenEnabled={fullscreenEnabled}>
        <PlayerContextProvider {...rest}>
          <MediaPlayerControls
            getDisplayText={getDisplayText}
            controls={controls}
            showVideo={showVideo}
            renderVideoDisplay={renderVideoDisplay}
          />
        </PlayerContextProvider>
      </FullscreenContextProvider>
    );
  }
}

MediaPlayer.propTypes = {
  ...PlayerContextProvider.propTypes,
  ...MediaPlayerControls.propTypes,
  ...FullscreenContextProvider.propTypes
};
delete MediaPlayer.propTypes.children;

MediaPlayer.defaultProps = {
  ...PlayerContextProvider.defaultProps,
  ...MediaPlayerControls.defaultProps,
  ...FullscreenContextProvider.defaultProps
};
delete MediaPlayer.defaultProps.children;

export default MediaPlayer;
