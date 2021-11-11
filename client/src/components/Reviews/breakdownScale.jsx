import React from 'react';
import styled from 'styled-components';

const Scaler = styled.div`
  width: 100%;
  height: 1em;
  background-color: #c4c4c4
`;

const ScaleBreakdown = (props) => (
  <div data-testid="scaleBreakdown" >
    {Object.keys(props.scale).map((characteristic) => (
      <div key={characteristic}>
        {`${characteristic}: ${Number(props.scale[characteristic].value).toFixed(1)}`}
        <Scaler/>
      </div>
    ))}
  </div>
);

export default ScaleBreakdown;
