import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Picture = styled.picture`
  width: 100%;
  height: 70%;
  overflow: hidden;
  margin-bottom: 10%;
  display: flex;
  border-radius: 1% 1% 0 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const CardImg = (props) => {
  const { src, alt } = props;
  return (
    <Picture>
      <Image src={src} alt={`product ${alt}`} />
    </Picture>
  );
};

CardImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CardImg;
