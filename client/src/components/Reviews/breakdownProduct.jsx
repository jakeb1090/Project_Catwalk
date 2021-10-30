import React from 'react';
import RatingBreakdown from './breakdownRating';
import ScaleBreakdown from './breakdownScale';

class ProductBreakdown extends React.Component {
  render() {
    return (
      <div data-testid="productBreakdown">
        Product Breakdown: visualization of review data for this product
        <RatingBreakdown/>
        <ScaleBreakdown/>
      </div>
    );
  }
}

export default ProductBreakdown;
