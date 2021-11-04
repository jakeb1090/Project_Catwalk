import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Table = styled.table`
  border: solid red;
`;

const CompareTable = (props) => (
  <Table>
    <thead>
      <tr>
        <th>{props.data[0] && props.data[0][0]}</th>
        <th>{props.data[0] && props.data[0][1]}</th>
        <th>{props.data[0] && props.data[0][2]}</th>
      </tr>
    </thead>
    <tbody>
      {/* some type of loop through data to creat rows/columns/cells */}
      {props.data.map((feature, i) => {
        {if (i > 0) {
          return (
            <tr>
              <td>{feature[0]}</td>
              <td>{feature[1]}</td>
              <td>{feature[2]}</td>
            </tr>
          )
        }}
      })}
    </tbody>
  </Table>
);

CompareTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default CompareTable;
