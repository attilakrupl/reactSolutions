import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  return <p>{props.count}</p>;
};

Display.propTypes = {
  count: PropTypes.number,
};

export default Display;
