import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdArrowBackIos } from 'react-icons/md';

const Button = styled.button`
  background-color: transparent;
  border: none;
`;

const ButtonContext = styled.div`
  border-radius: 2px;
  font-size: 2em;
  &:hover {
    color: lightgray;
    cursor: pointer;
  }
`;

const ReverseArrow = (props) => {
  const { onClick } = props;
  return (
    <Button type="button" aria-label="reverseArrow" onClick={onClick}>
      <ButtonContext>
        <MdArrowBackIos />
      </ButtonContext>
    </Button>
  );
};

ReverseArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ReverseArrow;
