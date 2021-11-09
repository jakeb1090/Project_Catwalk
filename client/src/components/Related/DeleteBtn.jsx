import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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

const DeleteBtn = (props) => {
  const { onDeleteOutfitClick, id } = props;
  return (
    <Button type="button" aria-label="deleteBtn" onClick={() => onDeleteOutfitClick(id)}>
      <ButtonContext>
        <MdClose />
      </ButtonContext>
    </Button>
  );
};

DeleteBtn.propTypes = {
  onDeleteOutfitClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default DeleteBtn;
