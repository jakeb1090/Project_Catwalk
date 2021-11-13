import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Picture = styled.picture`
  height: 65%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 1% 1% 0 0;
  margin-bottom: 10%;
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

CardImg.defaultProps = {
  src: 'https://images.unsplash.com/photo-1614469723922-c043ad9fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=727&q=80',
  alt: 'image not available',
};

CardImg.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default CardImg;
