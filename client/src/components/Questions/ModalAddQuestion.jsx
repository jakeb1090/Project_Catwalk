/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getProduct, addQuestion } from '../../utils';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 12,
  },
};

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* border: 1px solid gray; */}
  margin: 20px;

  input {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    height: 30px;
    font-size: 15px;
    border-radius: 6px;
    padding-left: 10px;
  }

  textarea {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-size: 15px;
    border-radius: 6px;
   }

   h2 {
     color: dimgray;
   }

  label {
    display: flex;
    flex-direction: column;
  }

  .product {
    color: darkslategray;
  }

  .notice {
    margin-bottom: 10px;
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

`;

const Red = styled.span`
  font-weight: bold;
  color: red;
`;

Modal.setAppElement('#app');
const ModalAddQuestion = ({ currentProduct }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    getProduct(currentProduct)
      .then((res) => {
        setProduct(res.data.name);
      });
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    e.target.name === 'question' ? setQuestion(e.target.value) : null;
    e.target.name === 'nickname' ? setNickname(e.target.value) : null;
    e.target.name === 'email' ? setEmail(e.target.value) : null;
    setIsValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const questionObj = {
      question,
      nickname,
      email,
    };

    if (!questionObj.email.includes('@')) {
      setIsValid(false);
    } else {
      addQuestion(questionObj)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <input type="button" onClick={toggleModal} value="Add Question +" />
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        style={customStyles}
      >
        <FormStyle>
          <form onSubmit={handleSubmit}>
            <h2>
              Ask Your Question
              <div>
                about the&nbsp;
                <span className="product">
                  {product}
                </span>
              </div>
            </h2>

            <label htmlFor="question">
              <span>
                Your Question
                <Red> *</Red>
              </span>
              <textarea onChange={handleChange} name="question" rows={10} cols={50} id="question" placeholder="Up to 1000 characters" />
            </label>

            <label htmlFor="nickname">
              <span>
                What is your nickname?
                <Red> *</Red>
              </span>
              <input onChange={handleChange} type="text" name="nickname" id="nickname" placeholder="jack543!" />
            </label>

            <label htmlFor="email">
              <span>
                Your email
                <Red> *</Red>
              </span>
              <input onChange={handleChange} type="text" id="nickname" name="email" placeholder="Why did you like the product or not?" />
              <Red>* Required</Red>
              <div className="notice">
                For authentication reasons, you will not be emailed
              </div>
            </label>
            <div className="footer">
              <button type="submit">Submit</button>
              {
                isValid
                  ? <span />
                  : <span className="error-text">You must enter the following: valid email</span>
              }
            </div>
          </form>
        </FormStyle>
      </Modal>
    </div>
  );
};

ModalAddQuestion.propTypes = {
  currentProduct: PropTypes.number.isRequired,
};

export default ModalAddQuestion;
