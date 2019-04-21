import React from 'react';
import PropTypes from 'prop-types';

import createContextSync from './createContextSync';

const contextHOC = (Provider, Consumer, Child) =>
  function ContextWrapper({ children, ...rest }) {
    return (
      <Provider {...rest}>
        <Consumer>
          {context => <Child context={context}>{children}</Child>}
        </Consumer>
      </Provider>
    );
  };

function contextProviderEmitter(namespace, Provider, Consumer) {
  const { update } = createContextSync(namespace);

  class ContextProviderEmitter extends React.PureComponent {
    componentDidMount() {
      update(this.props.context);
    }

    componentDidUpdate() {
      update(this.props.context);
    }

    render() {
      const { children, context } = this.props;
      if (typeof children === 'function') {
        return children(context);
      }
      return children;
    }
  }

  ContextProviderEmitter.propTypes = {
    context: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
  };

  // eslint-disable-next-line no-class-assign
  ContextProviderEmitter = contextHOC(
    Provider,
    Consumer,
    ContextProviderEmitter
  );

  ContextProviderEmitter.displayName = `ContextProviderEmitter(${namespace})`;

  return ContextProviderEmitter;
}

export default contextProviderEmitter;
