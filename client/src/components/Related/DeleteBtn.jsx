import React from 'react';
import PropTypes from 'prop-types';

const DeleteBtn = (props) => {
  const { onDeleteOutfitClick, id } = props;
  return (
    <button type="button" aria-label="deleteBtn" onClick={() => onDeleteOutfitClick(id)}>
      --X Icon--
    </button>
  );
};

DeleteBtn.propTypes = {
  onDeleteOutfitClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default DeleteBtn;
