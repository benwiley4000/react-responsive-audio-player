import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import classNames from '../../utils/classNames';

const ButtonWrapper = forwardRef(({ className, children, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames('cassette__media_button_wrapper', className)}
      {...rest}
    >
      {children}
    </div>
  );
});

ButtonWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default ButtonWrapper;
