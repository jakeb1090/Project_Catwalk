import React from 'react';

const ScaleBreakdown = (props) => (
  <div data-testid="scaleBreakdown" >
    {Object.keys(props.scale).map((characteristic) => (
      <div key={characteristic}>
          {`${characteristic}: ${Number(props.scale[characteristic].value).toFixed(1)}`}
      </div>
    ))}
  </div>
);

export default ScaleBreakdown;
