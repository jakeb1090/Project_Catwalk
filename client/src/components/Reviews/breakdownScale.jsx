import React from 'react';

const ScaleBreakdown = (props) => (
  <div>
    {Object.keys(props.scale).map((characteristic) => (
      <div>
          {`${characteristic}: ${Number(props.scale[characteristic].value).toFixed(1)}`}
      </div>
    ))}
  </div>
);

export default ScaleBreakdown;
