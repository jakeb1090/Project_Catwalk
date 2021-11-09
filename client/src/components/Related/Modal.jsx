import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import CompareTable from './CompareTable';

const Title = styled.h4`
`;

const Overlay = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128,128,128,0.5);
  overflow: hidden;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%,-50%);
  width: 98%;
  background-color: white;
`;

const ButtonContext = styled.div`
  border-radius: 2px;
  font-size: 2em;
  &:hover {
    color: lightgray;
    cursor: pointer;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  width: 100%;
  border: none;
`;

const Modal = (props) => {
  const { showModal, hideModal, data } = props;
  return (
    <Overlay show={showModal}>
      <ModalDiv data-testid="modal" show={showModal}>
        <Button type="button" aria-label="modalClose" onClick={hideModal}>
          <ButtonContext>
            <MdClose />
          </ButtonContext>
        </Button>
        <Title>Comparing</Title>
        <CompareTable
          data={data}
        />
      </ModalDiv>

    </Overlay>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
      ]),
    ).isRequired,
  ).isRequired,
};

export default Modal;
