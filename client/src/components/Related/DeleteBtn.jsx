import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Button = styled.button`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  border: none;
`;

const ButtonContext = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
background-color: rgba(255, 255, 255, 0.5);
font-size: 2em;
padding-bottom: -5px;
&:hover {
  background-color: rgba(200, 200, 200, 0.5);
  color: white;
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
