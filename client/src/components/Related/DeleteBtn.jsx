import React from 'react';

const DeleteBtn = (props) => (
  <button type="button" aria-label="deleteBtn" onClick={() => props.onDeleteOutfitClick(props.id)}>
    --X Icon--
  </button>
);

export default DeleteBtn;
