import React from 'react';
import styled from 'styled-components';
import CompareTable from './CompareTable';

const Title = styled.h5`
  border: solid black;
`;
const Div = styled.div`
  border: solid gray;
`;

const Modal = () => (
  <Div data-testid="modal">
    --Modal--
    <Title>Comparing</Title>
    <CompareTable />
  </Div>
);

export default Modal;
