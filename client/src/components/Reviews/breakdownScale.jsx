import React from 'react';

const ScaleBreakdown = (props) => (
  <div>
    {Object.keys(props.scale).map((characteristic) => (
      <div>
        <div>
          {`${characteristic}: ${Number(props.scale[characteristic].value).toFixed(1)}`}
        </div>
      </div>
    ))}
  </div>
);

export default ScaleBreakdown;
