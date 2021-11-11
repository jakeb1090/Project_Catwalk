import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
`;

const ButtonContext = styled.div`
  border-radius: 2px;
  font-size: 6em;
  &:hover {
    color: lightgray;
    cursor: pointer;
  }
`;

const AddOutfitBtn = (props) => {
  const { onAddOutfitClick } = props;
  return (
    <Button type="button" aria-label="addOutfitBtn" onClick={onAddOutfitClick}>
      <ButtonContext>
        <MdAdd />
      </ButtonContext>
    </Button>
  );
};

AddOutfitBtn.propTypes = {
  onAddOutfitClick: PropTypes.func.isRequired,
};

export default AddOutfitBtn;
