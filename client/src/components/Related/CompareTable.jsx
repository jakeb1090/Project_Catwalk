import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  border: solid red;
`;

const CompareTable = (props) => (
  <Table>
    <thead>
      <tr>
        <th>Current Product</th>
        <th>{' '}</th>
        <th>Comparing Product</th>
      </tr>
    </thead>
    <tbody>
      {/* some type of loop through data to creat rows/columns/cells */}
    </tbody>
  </Table>
);

CompareTable.propTypes = {

};

export default CompareTable;
