import { createContext } from 'react';

import { logWarning } from './console';

const packageVersion = require('../../package.json').version;

const _global = typeof window === 'undefined' ? global : window;
_global.__cassette_contexts__ = _global.__cassette_contexts__ || {};

function createSingleGlobalContext(displayName, defaultValue = null) {
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
  const Context = createContext(defaultValue);
  Context.displayName = displayName;
  Context.packageVersion = packageVersion;
  _global.__cassette_contexts__[displayName] = Context;
  return Context;
}

export default createSingleGlobalContext;
