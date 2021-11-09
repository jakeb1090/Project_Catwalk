import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MdArrowForwardIos } from 'react-icons/md';

const Button = styled.button`
  background-color: white;
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
