import React from 'react';
import ProductBreakdown from './breakdownProduct';
import ReviewList from './reviewList';
import API from './APIcalls';


class ReviewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 61597,
      characteristics: {
      },
      ratings: {
        1: 1,
        2: 2,
      },
      starFilters: [1, 2, 3, 4, 5],
      reviews: 'incorrect reviews from app state',
    };
  }

  componentDidMount() {
    const { id } = this.state;
    API.getReviews(id)
      .then((res) => {
        this.setState({
          reviews: res.data.results,
        });
      })
      .then(() => {
        console.log('state after API.getReviews', this.state);
      })
      .catch(() => {
        console.log('error from API.getReviews in componentDidMount');
      });
    API.getMeta(id)
      .then((res) => {
        this.setState({
          ratings: res.data.ratings,
          recommended: res.data.recommended,
          characteristics: res.data.characteristics,
        });
      })
      .then(() => {
        console.log('state after API.getMeta', this.state);
      })
      .catch(() => {
        console.log('error from API.getMeta in componentDidMount');
      });
  }

  averageRating() {
    let totalStars = 0;
    let qty = 0;
    const { ratings } = this.state;
    const array = Object.keys(ratings);
    array.forEach((star) => {
      totalStars += star * ratings[star];
      qty += Number(ratings[star]);
    });
    return (totalStars / qty).toFixed(1);
  }

  render() {
    const {
      id, starFilters, reviews, characteristics, ratings,
    } = this.state;
    return (
      <div data-testid="reviewapp">
        Ratings and Reviews: a widget by Annie
        <div>
          Average Rating :
          {' '}
          {this.averageRating()}
        </div>
        <ProductBreakdown
          id={id}
          starFilters={starFilters}
          scale={characteristics}
          ratings={ratings}
        />
        <ReviewList id={id} reviews={reviews} />
      </div>
    );
  }
}

export default ReviewApp;
