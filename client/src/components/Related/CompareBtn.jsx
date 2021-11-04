import React from 'react';

const CompareBtn = (props) => (
  <button type="button" aria-label="compareBtn" onClick={(event) => props.onCompareProductClick(event, props.id)}>
    --Star Icon--
  </button>
);

export default CompareBtn;
