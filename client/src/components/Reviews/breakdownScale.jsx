import React from 'react';
import styled from 'styled-components';

const Characteristics = styled.div`
  padding: 20px 0px;
  line-height: 300%;
`;

// const Icon = styled.div`
//   padding-left: ${props => props.percent}%;
// `;

const Icon = styled.div`
& {
  width: 100%;
  background-color: #d6d6d6; //gray
  position: relative;
  height: 0.5em;
}
&:after {
  content: '▲';
  justify-content: end;
  align-items: center;
  position:absolute;
  top:0; bottom:0;
  right:0;
  width:${props => props.percent}%;
}
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 1em;
`;


const ScaleBreakdown = function (props) {
  return (
    <div data-testid="scaleBreakdown" >
      {Object.keys(props.scale).map((characteristic) => (
        <Characteristics key={characteristic}>
          {characteristic}
          <Icon percent={Number(props.scale[characteristic].value) / 5 * 100} />
          <FlexRow>
            <div>{props.scaleSelections[characteristic][0]}</div>
            <div>{props.scaleSelections[characteristic][2]}</div>
            <div>{props.scaleSelections[characteristic][4]}</div>
          </FlexRow>
        </Characteristics>
      )
      )}
    </div>
  );
}
export default ScaleBreakdown;
