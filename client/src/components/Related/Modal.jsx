import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  display: ${({ show }) => (show ? 'block' : 'none')};
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
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const Modal = (props) => {
  const { showModal, hideModal, data } = props;
  return (
    <Overlay show={showModal}>
      <Div data-testid="modal" show={showModal}>
        <button type="button" aria-label="modalClose" onClick={hideModal}>--X ICON--</button>
        <Title>Comparing</Title>
        <CompareTable
          data={data}
        />
      </Div>

    </Overlay>
  );
};
Modal.defaultProps = {

};
Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string).isRequired).isRequired,
};

export default Modal;
