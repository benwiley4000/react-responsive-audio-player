import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  donotuse_PlayerContext as PlayerContext,
  FullscreenContextConsumer,
  PlayerPropTypes,
  getDisplayText
} from '@cassette/core';
import { VideoDisplay } from '@cassette/components';

import getControlRenderProp from './utils/getControlRenderProp';

import './styles/index.scss';

let nextControlKey = 0;
function getNextControlKey() {
  return (nextControlKey++).toString();
}

/**
 * The UI component of [`MediaPlayer`](#mediaplayer), which requires an ancestor [`PlayerContextProvider`](#playercontextprovider) (and optional ancestor [`FullscreenContextProvider`](#fullscreencontextprovider)) in order to work (use this if you need to access the [`playerContext`](#playercontext) or [`fullscreenContext`](#fullscreencontext) from outside the media player UI)
 */
export class MediaPlayerControls extends Component {
  getKeyedChildren(elements) {
    // cache of keys to use in controls render
    // (to maintain state in case order changes)
    this.controlKeys = this.controlKeys || new Map();

    // counts of rendered elements by type
    const elementsRendered = new Map();

    return elements.map(element => {
      if (!element) {
        return element;
      }

      // support React | Preact | Inferno
      const type = element.type || element.nodeName || element.tag || '';

      // index within list of keys by type
      const keyIndex = elementsRendered.get(type) || 0;
      elementsRendered.set(type, keyIndex + 1);

      const keysForType = this.controlKeys.get(type) || [];

      let key;
      if (keysForType[keyIndex]) {
        key = keysForType[keyIndex];
      } else {
        key = getNextControlKey();
        this.controlKeys.set(type, keysForType.concat(key));
      }

      return React.cloneElement(element, { key });
    });
  }

  render() {
    const {
      getDisplayText,
      controls,
      showVideo,
      renderVideoDisplay
    } = this.props;

    return (
      <FullscreenContextConsumer>
        {fullscreenContext => (
          <PlayerContext.Consumer>
            {playerContext => (
              <div className="cassette">
                {showVideo &&
                  renderVideoDisplay(playerContext, fullscreenContext)}
                <div
                  className="cassette__control_bar"
                  title={getDisplayText(
                    playerContext.playlist[playerContext.activeTrackIndex]
                  )}
                >
                  {this.getKeyedChildren(
                    controls.map(control => {
                      const renderControl = getControlRenderProp(control);
                      return (
                        renderControl &&
                        renderControl(playerContext, fullscreenContext, {
                          getDisplayText
                        })
                      );
                    })
                  )}
                </div>
              </div>
            )}
          </PlayerContext.Consumer>
        )}
      </FullscreenContextConsumer>
    );
  }
}

MediaPlayerControls.propTypes = {
  controls: PropTypes.arrayOf(PlayerPropTypes.control.isRequired).isRequired,
  getDisplayText: PropTypes.func.isRequired,
  showVideo: PropTypes.bool.isRequired,
  renderVideoDisplay: PropTypes.func.isRequired
};

MediaPlayerControls.defaultProps = {
  controls: [
    'spacer',
    'backskip',
    'playpause',
    'forwardskip',
    'spacer',
    'progress'
  ],
  getDisplayText: getDisplayText,
  showVideo: false,
  // eslint-disable-next-line no-unused-vars
  renderVideoDisplay(playerContext, fullscreenContext) {
    return (
      <VideoDisplay
        className="cassette__video_display_container"
        onClick={playerContext.onTogglePause}
      />
    );
  }
};

export default MediaPlayerControls;
