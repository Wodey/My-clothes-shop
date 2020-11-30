import React from 'react';
import PropTypes from "prop-types";

const HiddenToggle = ({children, toggle, ...props}) => {
  return !toggle && <>{children}</>
};

HiddenToggle.propTypes = {
  toggle: PropTypes.bool.isRequired,
  children: PropTypes.array
};

export default HiddenToggle;
