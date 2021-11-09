import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';

import { MdArrowForwardIos } from 'react-icons/md';

const Button = styled.button`
  background-color: white;
  border: none;
`;

const ForwardArrow = (props) => {
  const { onClick } = props;
  return (
    <Button type="button" aria-label="forwardArrow" onClick={onClick}>
      <IconContext.Provider value={{ size: '2em' }}>
        <MdArrowForwardIos />
      </IconContext.Provider>
    </Button>
  );
};

ForwardArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ForwardArrow;
