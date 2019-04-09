import React, { Component, Fragment } from 'react';
import StyleGuideRenderer from 'react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuideRenderer';

import { FullscreenContextProvider } from '@cassette/core';
import { VideoDisplay } from '@cassette/components';
import { MediaPlayerControls } from '@cassette/player';

import PlayerContextGroupPrimary from './PlayerContextGroupPrimary';
import PlayerContextProviderPrimary from './PlayerContextProviderPrimary';
import playlist from './playlist';

window.enhanceVideoDisplayForDocs = function(VideoDisplay) {
  VideoDisplay.defaultProps = {
    renderPlaceholderContent(params) {
      const {
        containerWidth,
        containerHeight,
        stealVideo,
        renderLastShownFrame
      } = params;
      return (
        <div
          onClick={e => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            stealVideo();
          }}
          style={{
            width: containerWidth,
            height: containerHeight,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '0.25rem'
            }}
          >
            Click to resume video playback in this container.
          </div>
          {renderLastShownFrame()}
        </div>
      );
    }
  };
};
window.enhanceVideoDisplayForDocs(VideoDisplay);

class DocsWrapper extends Component {
  constructor(props) {
    super(props);
    this.handleStateSnapshot = this.handleStateSnapshot.bind(this);
    this.initialStateSnapshot = JSON.parse(
      localStorage.getItem('media_player_snapshot')
    );
  }

  componentDidMount() {
    setTimeout(() => {
      // let's make sure we're the last to request this
      this.renderVideoIntoFixedDisplay();
    });
  }

  handleStateSnapshot(snapshot) {
    localStorage.setItem('media_player_snapshot', JSON.stringify(snapshot));
  }

  render() {
    return (
      <PlayerContextGroupPrimary>
        <PlayerContextProviderPrimary
          playlist={playlist}
          autoplay
          defaultMuted
          initialStateSnapshot={this.initialStateSnapshot}
          onStateSnapshot={this.handleStateSnapshot}
        >
          {({ renderVideoIntoHostElement }) => (
            <Fragment>
              <StyleGuideRenderer {...this.props} />
              <div
                style={{ position: 'fixed', bottom: 0, width: '100%' }}
                ref={elem => {
                  this.renderVideoIntoFixedDisplay = () => {
                    renderVideoIntoHostElement(
                      elem.querySelector('.fixed_video_display')
                    );
                  };
                }}
              >
                <VideoDisplay
                  className="fixed_video_display"
                  style={{
                    position: 'absolute',
                    top: -200 / (16 / 9),
                    right: 0,
                    width: 200,
                    fontSize: '0.7em',
                    opacity: 0.8
                  }}
                />
                <FullscreenContextProvider>
                  {fullscreenContext => (
                    <MediaPlayerControls
                      showVideo={fullscreenContext.fullscreen}
                      controls={[
                        'spacer',
                        'backskip',
                        'playpause',
                        'forwardskip',
                        'volume',
                        'captions',
                        'spacer',
                        'progress',
                        'fullscreen'
                      ]}
                    />
                  )}
                </FullscreenContextProvider>
              </div>
            </Fragment>
          )}
        </PlayerContextProviderPrimary>
      </PlayerContextGroupPrimary>
    );
  }
}

export default DocsWrapper;
