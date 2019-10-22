import React from 'react';
import PropTypes from 'prop-types';

const Strokes = props => {
  return (
    <img
      src={props.stroke}
      height='25em'
      alt='stroke steps'
      className='m'
    ></img>
  );
};

Strokes.propTypes = {
  stroke: PropTypes.string.isRequired
};

export default Strokes;
