import React, { Component } from 'react';
import Carousel from './Carousel';
// import { getProduct, getProductStyles, getProductRelated, getReviewsMeta } from '../../utils';

class Related extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // getProduct(61576, (err, response) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log('Get Product Response', response);
    //   }
    // });

    // getProductStyles(61576, (err, response) => {
    //   if (err) {
    //     console.log('Error', err);
    //   } else {
    //     console.log('Get Product Styles Response', response);
    //   }
    // });

    // getProductRelated(61576, (err, response) => {
    //   if (err) {
    //     console.log('Error', err);
    //   } else {
    //     console.log('Get Product Related Response', response);
    //   }
    // });

    // getReviewsMeta(61576, (err, response) => {
    //   if (err) {
    //     console.log('Error', err);
    //   } else {
    //     console.log('Get Reviews Meta Response', response);
    //   }
    // });
  }

  render() {
    return (
      <div data-testid="related">
        <h5>Related Products</h5>
        <Carousel />
        <h5>Your Outfit</h5>
        <Carousel />
      </div>
    );
  }
}

export default Related;
