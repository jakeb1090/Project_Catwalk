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
    width: 250px;
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

const Image = styled.div`
  max-height: 100px;
  width: auto;
  margin-bottom: 13px;
  margin-top: 13px;
  margin-left: 20px;
  border: 1px solid gray;
`;

const Red = styled.span`
  font-weight: bold;
  color: red;
`;

Modal.setAppElement('#app');

const ModalAddPhotos = ({ product, currentProduct }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [product, setProduct] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    e.target.name === 'photo-1' ? setPhotos([...photos, e.target.value]) : null;
    e.target.name === 'photo-2' ? setPhotoTwo(e.target.value) : null;
    e.target.name === 'photo-3' ? setPhotoThree(e.target.value) : null;
    e.target.name === 'photo-4' ? setPhotoFour(e.target.value) : null;
    setIsValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleModal();

    setPhotoOne('');
    setPhotoTwo('');
    setPhotoThree('');
    setPhotoFour('');
  };

  return (
    <div>
      <input type="button" onClick={toggleModal} value="Add Photos" />
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        style={customStyles}
      >
        <FormStyle>
          <form onSubmit={handleSubmit}>
            <h2>
              Add Photos
              <div>
                about the&nbsp;
                  <span className="product">
                  { product }
                </span>
              </div>
            </h2>
            {
              photos
                ? photos.map((photo) => <Image><img src={photo} alt="cool" /></Image>)
                : <span />
            }

            <label htmlFor="photo-1">
              <span>
                Image URL
              </span>
              <input onChange={handleChange} type="text" id="nickname" name="photo-1" placeholder="...photo.jpg" />
            </label>

            <label htmlFor="photo-2">
              <span>
                Image URL
              </span>
              <input onChange={handleChange} type="text" id="nickname" name="photo-2" placeholder="...photo-2.jpg" />
            </label>

            <label htmlFor="photo-1">
              <span>
                Image URL
              </span>
              <input onChange={handleChange} type="text" id="nickname" name="photo-3" placeholder="...photo-3.jpg" />
            </label>

            <label htmlFor="photo-1">
              <span>
                Image URL
              </span>
              <input onChange={handleChange} type="text" id="nickname" name="photo-4" placeholder="...photo-4.jpg" />
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

ModalAddPhotos.propTypes = {
  currentProduct: PropTypes.number.isRequired,
};

export default ModalAddPhotos;
