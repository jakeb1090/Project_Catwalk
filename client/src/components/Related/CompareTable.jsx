import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
  border: solid red;
`;

const CompareTable = (props) => {
  const { data } = props;
  return (
    <Table>
      <thead>
        <tr>
          <th>{data[0] && data[0][0]}</th>
          <th>{data[0] && data[0][1]}</th>
          <th>{data[0] && data[0][2]}</th>
        </tr>
      </thead>
      <tbody>
        {data.map((feature, i) => {
          const key = i;
          if (i > 0) {
            return (
              <tr key={key}>
                <td>{feature[0]}</td>
                <td>{feature[1]}</td>
                <td>{feature[2]}</td>
              </tr>
            );
          }
          return null;
        })}
      </tbody>
    </Table>
  );
};

CompareTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string).isRequired,
  ).isRequired,
};

export default CompareTable;
