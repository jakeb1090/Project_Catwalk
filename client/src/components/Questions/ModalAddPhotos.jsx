/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  height: 120px;
  width: auto;
  margin-bottom: 13px;
  margin-top: 13px;
  margin-left: 20px;
  border: 1px solid gray;
`;

Modal.setAppElement('#app');

const ModalAddPhotos = ({ product, onAddPhotos }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [product, setProduct] = useState('');
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const imgName = e.target.name;
    setPhotos([
      ...photos,
      { [imgName]: e.target.value },
    ]);
    console.log(photos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPhotos(photos);
    toggleModal();
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
              // eslint-disable-next-line react/no-array-index-key
              photos.length > 0
                ? <Image><img src={photos[0].photoOne} alt="cool" /></Image>
                : <span />
            }
            <label htmlFor="photo-1">
              <span>
                Image URL
              </span>
              <input
                onChange={handleChange}
                type="text"
                id="nickname"
                name="photoOne"
                placeholder="...photo.jpg"
              />
            </label>

            <label htmlFor="photo-2">
              <span>
                Image URL
              </span>
              <input
                onChange={handleChange}
                type="text"
                id="nickname"
                name="photoTwo"
                placeholder="...photo-2.jpg"
              />
            </label>

            <label htmlFor="photo-1">
              <span>
                Image URL
              </span>
              <input
                onChange={handleChange}
                type="text"
                id="nickname"
                name="photoThree"
                placeholder="...photo-3.jpg"
              />
            </label>

            <label htmlFor="photo-1">
              <span>
                Image URL
              </span>
              <input
                onChange={handleChange}
                type="text"
                id="nickname"
                name="photoFour"
                placeholder="...photo-4.jpg"
              />
            </label>

            <div className="footer">
              <button type="submit">Submit</button>
            </div>
          </form>
        </FormStyle>
      </Modal>
    </div>
  );
};

ModalAddPhotos.propTypes = {
  product: PropTypes.string.isRequired,
  onAddPhotos: PropTypes.func.isRequired,
};

export default ModalAddPhotos;
