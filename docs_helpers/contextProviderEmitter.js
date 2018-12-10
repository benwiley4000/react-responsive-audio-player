import React from 'react';

import createContextSync from './createContextSync';

function contextProviderEmitter(namespace, Provider, Consumer) {
  const { update } = createContextSync(namespace);

  function ContextProviderEmitter({ children, ...rest }) {
    return (
      <Provider {...rest}>
        <Consumer>
          {context => {
            requestAnimationFrame(() => update(context));
            if (typeof children === 'function') {
              return children(context);
            }
            return children;
          }}
        </Consumer>
      </Provider>
    );
  }

  ContextProviderEmitter.displayName = `ContextProviderEmitter(${namespace})`;

  return ContextProviderEmitter;
}

export default contextProviderEmitter;
