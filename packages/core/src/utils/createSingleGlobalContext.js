import { createContext } from 'react';

import { logWarning } from './console';

const packageVersion = require('../../package.json').version;

const _global = typeof window === 'undefined' ? global : window;
_global.__cassette_contexts__ = _global.__cassette_contexts__ || {};

function createSingleGlobalContext({
  displayName,
  defaultValue = null,
  keysWillUpdate
}) {
  const ExistingContext = _global.__cassette_contexts__[displayName];
  if (ExistingContext) {
    if (ExistingContext.packageVersion !== packageVersion) {
      logWarning(
        `Warning: multiple versions of ${displayName} from the @cassette/core` +
          ` package have been loaded. v${packageVersion} will be ignored and` +
          ` v${ExistingContext.packageVersion} will be used instead.`
      );
    }
    return ExistingContext;
  }
  // inspired by:
  // https://github.com/philosaf/observed-bits/blob/master/src/index.js
  const flags = {};
  let i = 0;
  for (const key of keysWillUpdate) {
    flags[key] = 1 << i++;
  }
  const Context = createContext(defaultValue, function getChangedBits(
    prev,
    next
  ) {
    let mask = 0;
    for (const key of keysWillUpdate) {
      if (prev[key] !== next[key]) {
        mask |= flags[key];
      }
    }
    return mask;
  });
  Context.__cassetteGetObservedBits = keys => {
    let observedBits = 0;
    for (const key of keys) {
      observedBits |= flags[key];
    }
    return observedBits;
  };
  Context.displayName = displayName;
  Context.packageVersion = packageVersion;
  _global.__cassette_contexts__[displayName] = Context;
  return Context;
}

export default createSingleGlobalContext;
