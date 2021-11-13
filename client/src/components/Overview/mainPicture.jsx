import React from 'react';
import styled from 'styled-components';

import ForwardArrow from '../Common/ForwardArrow';
import ReverseArrow from '../Common/ReverseArrow';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: ${({ mobile }) => (mobile ? '100%' : '60%')};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const MainPicture = (props) => {
  const { src, alt, mobile, forwardClick, reverseClick } = props;
  return (
    <Container mobile={mobile}>
      <ReverseArrow onClick={reverseClick} />
      <Image src={src} alt={alt} />
      <ForwardArrow onClick={forwardClick} />
    </Container>
  );
};

export default MainPicture;
