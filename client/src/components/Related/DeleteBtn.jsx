import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { IconContext } from 'react-icons';

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  border: none;
`;

const DeleteBtn = (props) => {
  const { onDeleteOutfitClick, id } = props;
  return (
    <Button type="button" aria-label="deleteBtn" onClick={() => onDeleteOutfitClick(id)}>
      <IconContext.Provider value={{ size: '2em' }}>
        <MdClose />
      </IconContext.Provider>
    </Button>
  );
};

DeleteBtn.propTypes = {
  onDeleteOutfitClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default DeleteBtn;
