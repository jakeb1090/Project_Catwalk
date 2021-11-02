import React from 'react';
import RatingBreakdown from './breakdownRating';
import ScaleBreakdown from './breakdownScale';

const ProductBreakdown = function (props) {
  console.log('product breakdown', props);
  const { scale } = props;
  return (
    <div data-testid="productBreakdown">
      Product Breakdown: visualization of review data for this product
      <RatingBreakdown />
      <ScaleBreakdown scale={scale} />
    </div>
  );
}

export default ProductBreakdown;
