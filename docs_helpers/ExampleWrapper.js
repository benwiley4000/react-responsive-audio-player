import React from 'react';
import PropTypes from 'prop-types';

import PlayerContextGroupSecondary from './PlayerContextGroupSecondary';
import PlayerContextProviderSecondary from './PlayerContextProviderSecondary';

function ExampleWrapper({ children }) {
  return (
    <PlayerContextGroupSecondary>
      <PlayerContextProviderSecondary>
        {children}
      </PlayerContextProviderSecondary>
    </PlayerContextGroupSecondary>
  );
}

ExampleWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default ExampleWrapper;
