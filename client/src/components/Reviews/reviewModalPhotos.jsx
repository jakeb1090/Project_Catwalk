/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
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

ReactModal.setAppElement('#app');

class ModalAddPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const photos = Object.values(this.state);
    this.props.addPhotos(photos);
    this.props.closePhotoModal();
    console.log('photo array', photos);
  }

  render() {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        onRequestClose={this.toggleModal}
        contentLabel="My dialog"
        style={customStyles}
      >
        <FormStyle>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h2>Add Photos</h2>
            {/* {
                photos.length > 0
                  ? <Image><img src={photos[0].photoOne} alt="cool" /></Image>
                  : <span />
              } */}
            <label htmlFor="photo-1">
              <span>
                Image URL
              </span>
              <input onChange={this.handleChange.bind(this)} type="text" id="nickname" name="photoOne" placeholder="...photo-1.jpg" />
            </label>

            <label htmlFor="photo-2">
              <span>
                Image URL
              </span>
              <input onChange={this.handleChange.bind(this)} type="text" id="nickname" name="photoTwo" placeholder="...photo-2.jpg" />
            </label>

            <label htmlFor="photo-1">
              <span>
                Image URL
              </span>
              <input onChange={this.handleChange.bind(this)} type="text" id="nickname" name="photoThree" placeholder="...photo-3.jpg" />
            </label>

            <label htmlFor="photo-1">
              <span>
                Image URL
              </span>
              <input onChange={this.handleChange.bind(this)} type="text" id="nickname" name="photoFour" placeholder="...photo-4.jpg" />
            </label>

            <div className="footer">
              <button type="submit">Submit</button>
            </div>
          </form>
        </FormStyle>
      </ReactModal>
    )
  };
};

ModalAddPhotos.propTypes = {
  addPhotos: PropTypes.func.isRequired,
};

export default ModalAddPhotos;
