import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { IconContext } from 'react-icons';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
`;

const AddOutfitBtn = (props) => {
  const { onAddOutfitClick } = props;
  return (
    <Button type="button" aria-label="addOutfitBtn" onClick={onAddOutfitClick}>
      <IconContext.Provider value={{ size: '2em' }}>
        <MdAdd />
      </IconContext.Provider>
    </Button>
  );
};

AddOutfitBtn.propTypes = {
  onAddOutfitClick: PropTypes.func.isRequired,
};

export default AddOutfitBtn;
