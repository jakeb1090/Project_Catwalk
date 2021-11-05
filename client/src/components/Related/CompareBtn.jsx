import React from 'react';
import PropTypes from 'prop-types';

const CompareBtn = (props) => {
  const { onCompareProductClick, id } = props;
  return (
    <button type="button" aria-label="compareBtn" onClick={(event) => onCompareProductClick(event, id)}>
      --Star Icon--
    </button>
  );
};

CompareBtn.propTypes = {
  onCompareProductClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default CompareBtn;
