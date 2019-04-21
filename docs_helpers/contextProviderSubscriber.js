import React, { Component } from 'react';
import PropTypes from 'prop-types';

import createContextSync from './createContextSync';

function contextProviderSubscriber(namespace, Provider) {
  const { subscribe, unsubscribe, read } = createContextSync(namespace);

  class ContextProviderSubscriber extends Component {
    constructor(props) {
      super(props);
      this.updateForContext = this.updateForContext.bind(this);
    }

    componentDidMount() {
      subscribe(this.updateForContext);
    }

    componentWillUnmount() {
      unsubscribe(this.updateForContext);
    }

    updateForContext() {
      this.forceUpdate();
    }

    render() {
      return <Provider value={read()}>{this.props.children}</Provider>;
    }
  }

  ContextProviderSubscriber.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
  };

  ContextProviderSubscriber.displayName = `ContextProviderSubscriber(${namespace})`;

  return ContextProviderSubscriber;
}

export default contextProviderSubscriber;
