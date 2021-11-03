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
      starFilters: [3, 4, 5],
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
      // .then(() => {
      //   console.log('state after API.getReviews', this.state);
      // })
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
      // .then(() => {
      //   console.log('state after API.getMeta', this.state);
      // })
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

  toggleStarFilter(star) {
    console.log(this.state.starFilters.indexOf(star))
    if (this.state.starFilters.length === 5) {
      this.setState({
        starFilters: star,
      })
    } else if (this.state.starFilters.indexOf(star) === -1) {
      this.setState({
        starFilters: [...this.state.starFilters, star],
      })
    } else {
      var starIndex = this.state.starFilters.indexOf(star)
      var updated = this.state.starFilters
      updated.splice(starIndex, 1)
      this.setState({
        starFilters: updated,
      })
    }
  }

  removeStarFilters() {
    this.setState({
      starFilters: [1, 2, 3, 4, 5],
    })
  }

  render() {
    const {
      id, starFilters, reviews, characteristics, ratings
    } = this.state;
    return (
      <div data-testid="reviewapp">
        <h4>Product Summary</h4>
        <div>
          {`Average Rating: ${this.averageRating()}`}
        </div>
        <ProductBreakdown
          id={id}
          starFilters={starFilters}
          scale={characteristics}
          ratings={ratings}
          toggleStarFilter={this.toggleStarFilter.bind(this)}
          removeStarFilters={this.removeStarFilters.bind(this)}
        />
        <ReviewList
          id={id}
          reviews={reviews}
          starFilters={Object.values(starFilters)}
        />
      </div>
    );
  }
}

export default ReviewApp;
