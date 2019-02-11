import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PlayerContext from './PlayerContext';

import { logWarning } from './utils/console';
import getReactParentNameStack from './utils/getReactParentNameStack';

class PlayerContextConsumer extends PureComponent {
  render() {
    const { children, filterList } = this.props;
    if (!filterList) {
      if (!this.warnedAboutFilterList) {
        let warning = `
          Please pass the filterList prop to PlayerContextConsumer in order
          to avoid unnecessarily frequent re-renders, e.g.

          const filterList = ['paused', 'onTogglePause'];
          // ...
          <PlayerContextConsumer filterList={filterList}>
            {({ paused, onTogglePause }) => {
              return <div>{/* ... */}</div>;
            }}
          </PlayerContextConsumer>
        `;
        for (const parentName of getReactParentNameStack(this)) {
          warning += `
            Rendered by ${parentName}`;
        }
        logWarning(warning);
        this.warnedAboutFilterList = true;
      }
      return <PlayerContext.Consumer>{children}</PlayerContext.Consumer>;
    }

    const flags = PlayerContext.__cassetteGetObservedBits(filterList);
    return (
      <PlayerContext.Consumer unstable_observedBits={flags}>
        {playerContext => {
          const usedContext = {};
          for (const name of filterList) {
            if (playerContext.hasOwnProperty(name)) {
              usedContext[name] = playerContext[name];
            }
          }
          return children(usedContext);
        }}
      </PlayerContext.Consumer>
    );
  }
}

PlayerContextConsumer.propTypes = {
  children: PropTypes.func.isRequired,
  filterList: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default PlayerContextConsumer;
