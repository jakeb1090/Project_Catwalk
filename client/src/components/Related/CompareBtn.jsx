import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdStarOutline } from 'react-icons/md';

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
  border: none;
`;

const Tip = styled.span`
  font-size: 10px;
  color: black;
  border: solid 0.5px black;
  border-radius: 2.5px;
  padding: 1px;
  background-color: OldLace;
  display: none;
`;
const ButtonContext = styled.div`
  border-radius: 2px;
  font-size: 2em;
  &:hover {
    color: lightgray;
    cursor: pointer;
  }
  &:hover ${Tip} {
    display: inline;
  }
`;

const CompareBtn = (props) => {
  const { onCompareProductClick, id } = props;
  return (
    <Button type="button" aria-label="compareBtn" onClick={(event) => onCompareProductClick(event, id)}>
      <ButtonContext>
        <Tip>Compare Product</Tip>
        <MdStarOutline />
      </ButtonContext>
    </Button>
  );
};

CompareBtn.propTypes = {
  onCompareProductClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default CompareBtn;
