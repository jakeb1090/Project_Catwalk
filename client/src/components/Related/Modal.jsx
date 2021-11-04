import React from 'react';
import styled from 'styled-components';
import CompareTable from './CompareTable';

const Title = styled.h5`
  border: solid black;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128,128,128,0.5);
  overflow: hidden;
  display: ${({show}) => (show ? 'block' : 'none')};
`;

const Div = styled.div`
  border: solid gray;
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%,-50%);
  height: 400px;
  width: 600px;
  background-color: white;
  display: ${({show}) => (show ? 'block' : 'none')};
`;

const Modal = (props) => (
  <Overlay show={props.showModal}>
    <Div data-testid="modal" show={props.showModal}>
      <button type="button" onClick={props.hideModal}>--X ICON--</button>
      <Title>Comparing</Title>
      <CompareTable
        data={props.data}
      />
    </Div>

  </Overlay>
);

export default Modal;
