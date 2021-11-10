import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Picture = styled.picture`
  height: 65%;
  width: 100%;
  overflow: hidden;
  margin-bottom: 10%;
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 1% 1% 0 0;
`;

const Image = styled.img`
height: 100%;
width: auto;
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
