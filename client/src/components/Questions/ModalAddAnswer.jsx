/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getProduct, addQuestion } from '../../utils';
import ModalAddPhotos from './ModalAddPhotos';

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
const ModalAddAnswer = ({ currentProduct, questionBody, handleAddAnswer }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [question, setQuestion] = useState('');
  // const [nickname, setNickname] = useState('');
  // const [email, setEmail] = useState('');
  const [questionData, setQuestionData] = useState('');
  const [product, setProduct] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [photos, setPhotos] = useState([]);

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
    const questionItem = e.target.name;
    setQuestionData([
      ...questionData,
      { [questionItem]: e.target.value },
    ]);
    console.log(photos);
    setIsValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!questionData.email.includes('@')) {
      setIsValid(false);
    } else {
      addQuestion(questionData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleAddPhotos = (photosObj) => {
    setPhotos(photosObj);
  };

  return (
    <span>
      <span
        aria-hidden="true"
        onClick={toggleModal}
      >
        Add Answer
      </span>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        style={customStyles}
      >
        <FormStyle>
          <form onSubmit={handleSubmit}>
            <h2>
              Submit Your Answer
              <div>
                {product}
                {`${':'} `}
                { questionBody }
                &nbsp;
                <span className="product" />
              </div>
            </h2>

            <label htmlFor="question">
              <span>
                Your Answer
                <Red> *</Red>
              </span>
              <textarea onChange={handleChange} name="question" maxLength={1000} rows={10} cols={50} id="question" placeholder="Up to 1000 characters" />
            </label>

            <label htmlFor="nickname">
              <span>
                What is your nickname?
                <Red> *</Red>
              </span>
              <input onChange={handleChange} type="text" name="nickname" id="nickname" maxLength={60} placeholder="jack543!" />
            </label>

            <label htmlFor="email">
              <span>
                Your email
                <Red> *</Red>
              </span>
              <input onChange={handleChange} type="text" maxLength={60} id="nickname" name="email" placeholder="Why did you like the product or not?" />
              <Red>* Required</Red>
              <div className="notice">
                For authentication reasons, you will not be emailed
              </div>
            </label>
            <ul>
              {
                photos.length !== 0
                  ? photos.map((photo) => <li key={photo.splice(5, 9)}>{photo}</li>)
                  : null
              }
            </ul>
            <div className="footer">
              <button type="submit" onClick={handleAddAnswer}>Submit</button>
              {
                isValid
                  ? <span />
                  : <span className="error-text">You must enter the following: valid email</span>
              }
            </div>
          </form>
        </FormStyle>
        <ModalAddPhotos
          currentProduct={currentProduct}
          product={product}
          onAddPhotos={handleAddPhotos}
        />
      </Modal>

    </span>
  );
};

ModalAddAnswer.propTypes = {
  questionBody: PropTypes.string.isRequired,
  currentProduct: PropTypes.number.isRequired,
};

export default ModalAddAnswer;
