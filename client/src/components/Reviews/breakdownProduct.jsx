import React from 'react';
import RatingBreakdown from './breakdownRating';
import ScaleBreakdown from './breakdownScale';

class ProductBreakdown extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const {scale} = this.props;
    return (
      <div data-testid="productBreakdown">
        Product Breakdown: visualization of review data for this product
        <RatingBreakdown/>
        <ScaleBreakdown scale={scale}/>
      </div>
    );
  }
}

export default ProductBreakdown;
