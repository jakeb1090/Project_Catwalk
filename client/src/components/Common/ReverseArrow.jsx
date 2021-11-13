import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdArrowForwardIos } from 'react-icons/md';

const Button = styled.button`
  position: absolute;
  margin-right: calc(100% - 3em);
  background-color: transparent;
  border: none;
  z-index: 3;
  transform: rotate(90deg);
  transform: scaleX(-1);
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

const ReverseArrow = ({ onClick }) => (
  <Button type="button" aria-label="reverseArrow" onClick={onClick}>
    <ButtonContext>
      <MdArrowForwardIos />
    </ButtonContext>
  </Button>
);

ReverseArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ReverseArrow;
