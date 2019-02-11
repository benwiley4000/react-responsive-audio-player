import React, {
  useContext,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED as secretInternals
} from 'react';

import {
  logWarning,
  donotuse_PlayerContext as PlayerContext
} from '@cassette/core';

const packageVersion = require('../package.json').version;

// TODO: hopefully in the future we'll have a more stable API
// for observedBits/similar that doesn't require trial and error.

let warningLogged = false;
function logObservedBitsWarning() {
  if (!warningLogged) {
    logWarning(`
      Unable to optimize playerContext subscription with @cassette/hooks
      v${packageVersion} and react v${React.version}.
      Please email therealbenwiley@gmail.com to get this fixed!
      Meanwhile you can try an earlier version of React (v16.8.0 or later).
    `);
    warningLogged = true;
  }
}

let Dispatcher;
try {
  Dispatcher = secretInternals.ReactCurrentDispatcher;
} catch (err) {
  logObservedBitsWarning();
}

function usePlayerContext(filterList) {
  if (!filterList) {
    logWarning(`
      Please pass list of context items to usePlayerContext in order
      to avoid unnecessarily frequent re-renders, e.g.

      const { paused, onTogglePause } = usePlayerContext([
        'paused',
        'onTogglePause'
      ]);
    `);
    return useContext(PlayerContext);
  }
  const { readContext } = (Dispatcher && Dispatcher.current) || {};
  let playerContext;
  if (readContext) {
    const flags = PlayerContext.__cassetteGetObservedBits(filterList);
    playerContext = readContext(PlayerContext, flags);
  } else {
    logObservedBitsWarning();
    // if use of readContext internal fails, we
    // will use useContext, but skip passing
    // unstable_observedBits.
    playerContext = useContext(PlayerContext);
  }
  const usedContext = {};
  for (const name of filterList) {
    if (playerContext.hasOwnProperty(name)) {
      usedContext[name] = playerContext[name];
    }
  }
  return usedContext;
}

export default usePlayerContext;
