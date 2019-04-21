import React, { createElement } from 'react';

import PlayerContext from './PlayerContext';
import FullscreenContext from './FullscreenContext';
import { logWarning } from './utils/console';

function playerContextFilter(component, contextPropNames) {
  const warned = {};
  const childName = component.displayName || component.name;
  const flags = PlayerContext.__cassetteGetObservedBits(contextPropNames);
  function PlayerContextFilter(props) {
    return (
      <FullscreenContext.Consumer>
        {fullscreenContext => (
          <PlayerContext.Consumer unstable_observedBits={flags}>
            {playerContext => {
              const childProps = { ...props };
              for (const propName of contextPropNames) {
                if (playerContext.hasOwnProperty(propName)) {
                  childProps[propName] = playerContext[propName];
                } else if (fullscreenContext.hasOwnProperty(propName)) {
                  childProps[propName] = fullscreenContext[propName];
                } else if (!warned[propName]) {
                  logWarning(
                    "Prop '" +
                      propName +
                      "' for component " +
                      childName +
                      ' not found in playerContext or fullscreenContext.'
                  );
                  warned[propName] = true;
                }
              }
              return createElement(component, childProps);
            }}
          </PlayerContext.Consumer>
        )}
      </FullscreenContext.Consumer>
    );
  }
  if (childName) {
    PlayerContextFilter.displayName = `PlayerContextFilter(${childName})`;
  }
  return PlayerContextFilter;
}

export default playerContextFilter;
