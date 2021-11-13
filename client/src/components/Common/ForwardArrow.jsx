import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MdArrowForwardIos } from 'react-icons/md';

const Button = styled.button`
position: absolute;
  margin-left: calc(100% - 3em);
  background-color: transparent;
  border: none;
  z-index: 3;
`;

const ButtonContext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 3em;
  &:hover {
    background-color: rgba(200, 200, 200, 0.5);
    color: white;
    cursor: pointer;
  }
`;

const ForwardArrow = (props) => {
  const { onClick } = props;
  return (
    <Button type="button" aria-label="forwardArrow" onClick={onClick}>
      <ButtonContext>
        <MdArrowForwardIos />
      </ButtonContext>
    </Button>
  );
};

ForwardArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ForwardArrow;
