import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdArrowBackIos } from 'react-icons/md';
import { IconContext } from 'react-icons';

const Button = styled.button`
  background-color: transparent;
  border: none;
`;

const ReverseArrow = (props) => {
  const { onClick } = props;
  return (
    <Button type="button" aria-label="reverseArrow" onClick={onClick}>
      <IconContext.Provider value={{ size: '2em' }}>
        <MdArrowBackIos />
      </IconContext.Provider>
    </Button>
  );
};

ReverseArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ReverseArrow;
