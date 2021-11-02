import React from 'react';
import ProductBreakdown from './breakdownProduct';
import ReviewList from './reviewList';
import API from './APIcalls';
import axios from 'axios';
import $ from 'jquery';

class ReviewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 61595,
      "characteristics": {
      },
      starFilters: [1, 2, 3, 4, 5],
    };
  }

  componentDidMount() {
    API.getReviews(this.state.id, (err, result) => {
      if (err) {
        console.log('error from componentDidMount');
      } else {
        this.setState({
          reviews: result.data.results
        })
      }
    });
    API.getMeta(this.state.id, (err, result) => {
      if (err) {
        console.log('error from componentDidMount');
      } else {
        this.setState({
          ratings: result.data.ratings,
          recommended: result.data.recommended,
          characteristics: result.data.characteristics
        })
        console.log('app state', this.state);
      }
    })
  }

  render() {
    const { id, starFilters, reviews, characteristics, ratings } = this.state;
    const averageRating = function () {
      var totalStars = 0;
      var qty = 0;
      for (const star in ratings) {
        totalStars += star * ratings[star];
        qty += Number(ratings[star]);
      }

      return (totalStars / qty).toFixed(1);
    }
    return (
      <div data-testid="reviewapp">
        Ratings and Reviews: a widget by Annie
        <div>Average Rating : {averageRating()}</div>
        <ProductBreakdown id={id} starFilters={starFilters} scale={characteristics} />
        <ReviewList id={id} reviews={reviews} />
      </div>
    );
  }
}

export default ReviewApp;
