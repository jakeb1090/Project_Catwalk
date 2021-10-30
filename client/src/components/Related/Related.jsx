import React, { Component } from 'react';
import Carousel from './Carousel';

class Related extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
