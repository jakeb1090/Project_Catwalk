import React from 'react';
import PropTypes from 'prop-types';

const CardImg = (props) => {
  const { src, alt } = props;
  return (
    <div>
      <img src={src} alt={`product ${alt}`} width="75" height="100" />
    </div>
  );
};

CardImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CardImg;
