import React from 'react';
import PropTypes from 'prop-types';

const AddOutfitBtn = (props) => {
  const { onAddOutfitClick } = props;
  return (
    <button type="button" aria-label="addOutfitBtn" onClick={onAddOutfitClick}>
      --Plus Icon--
    </button>
  );
};

AddOutfitBtn.propTypes = {
  onAddOutfitClick: PropTypes.func.isRequired,
};

export default AddOutfitBtn;
