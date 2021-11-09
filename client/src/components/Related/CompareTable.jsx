import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
  width: 80%;
  background-color: whitesmoke;
`;
const ColumnHead = styled.th`
  text-align: left;
`;

const CompareTable = (props) => {
  const { data } = props;
  return (
    <Table>
      <thead>
        <tr>
          <ColumnHead>{data[0] && data[0][0]}</ColumnHead>
          <ColumnHead>{data[0] && data[0][1]}</ColumnHead>
          <ColumnHead>{data[0] && data[0][2]}</ColumnHead>
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
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
      ]),
    ).isRequired,
  ).isRequired,
};

export default CompareTable;
