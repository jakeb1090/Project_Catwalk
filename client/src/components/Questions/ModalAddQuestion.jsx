import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const StyledModal = styled.div`
  text-align: center;
`;

const ModalAddQuestion = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <StyledModal>
        <button onClick={toggleModal}>Add Question</button>

        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
        >
          <div>My modal dialog.</div>
          <input type="button" value="close" onClick={toggleModal} />
        </Modal>
      </StyledModal>
    </div>
  );
};

export default ModalAddQuestion;
