import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
import Modal from './Modal';
import {
  getPaginatedProducts,
  getProduct,
  getProductStyles,
  getProductRelated,
  getReviewsMeta,
} from '../../utils';

const Title = styled.h5`
  border: solid black;
`;

class Related extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outfit: [61580, 61593, 61602, 61614, 61687, 61689, 61731],
      current: 61602,
    };
  }

  componentDidMount() {
    // getPaginatedProducts(1, 10, (err, response) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log('Get Paginated Product Response', response);
    //   }
    // });

    // getProduct(61602, (err, response) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log('Get Product Response', response);
    //   }
    // });

    // getProductStyles(61602, (err, response) => {
    //   if (err) {
    //     console.log('Error', err);
    //   } else {
    //     console.log('Get Product Styles Response', response);
    //   }
    // });

    getProductRelated(this.state.current, (err, response) => {
      if (err) {
        console.log('Error', err);
      } else {
        console.log('Get Product Related Response', response);
        this.objectBuilder(response);
      }
    });

    // getReviewsMeta(61602, (err, response) => {
    //   if (err) {
    //     console.log('Error', err);
    //   } else {
    //     console.log('Get Reviews Meta Response', response);
    //   }
    // });
  }

  objectBuilder = (products) => {
    console.log('build: ', products)
  }

  render() {
    const { related } = this.state;
    return (
      <div data-testid="related">
        <Modal />
        <Title>Related Products</Title>
        <Carousel
          related={related}
        />
        <Title>Your Outfit</Title>
        <Carousel />
      </div>
    );
  }
}

export default Related;
