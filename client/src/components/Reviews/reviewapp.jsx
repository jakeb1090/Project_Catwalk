import React from 'react';
import ProductBreakdown from './productBreakdown';
import ReviewList from './reviewList';

class ReviewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 61590,
      reviews: [],
      starFilters: [],
    };
  }

  render() {
    const { id, starFilters, reviews } = this.state;
    return (
      <div data-testid="reviewapp">
        Ratings and Reviews: a widget by Annie
        <ProductBreakdown id={id} startFilters={starFilters} />
        <ReviewList id={id} reviews={reviews} />
      </div>
    );
  }
}

export default ReviewApp;
