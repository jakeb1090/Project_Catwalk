import React from 'react';

const ScaleBreakdown = (props) => {

  return (
    <div>
      {Object.keys(props.scale).map((characteristic) =>
        <div>{characteristic} Scale: {props.scale[characteristic].value}</div>
      )}
    </div>
  );
}

export default ScaleBreakdown;
