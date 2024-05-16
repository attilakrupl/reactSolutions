import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return <button onClick={props.method}>{props.butonText}</button>;
};

Button.propTypes = {
  method: PropTypes.func,
  butonText: PropTypes.string,
};

export default Button;
