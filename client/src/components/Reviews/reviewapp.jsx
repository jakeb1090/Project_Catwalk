import React from 'react';
import './graphics/icons';
import styled from 'styled-components';
import ProductBreakdown from './breakdownProduct';
import ReviewList from './reviewList';
import API from './APIcalls';

const ReviewWidget = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

class ReviewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 61590,
      characteristics: {
      },
      sort: 'relevance',
      ratings: {
        1: 1,
        2: 2,
      },
      filterQty: 5,
      starFilters: {
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
      },
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props;
    if (prevProps.id !== id) {
      this.fetchAPI();
    }
  }

  fetchAPI() {
    this.setState({
      id: this.props.id,
    });
    const { id, sort } = this.state;
    API.getReviews(this.props.id, sort)
      .then((res) => {
        this.setState({
          reviews: res.data.results,
        });
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
      .catch(() => {
        console.log('error from API.getMeta in componentDidMount');
      });
  }

  putFeedback(action, review_id) {
    API.put(action, review_id) // there is an error here!
      .then(() => {
        this.fetchAPI();
        console.log(`review #', review_id, ' was marked: ${action}`);
      })
      .catch((err) => {
        console.log(`error marking review as ${action}`, err);
      });
  }

  postReview(review) {
    review.product_id = this.state.id;

    API.post(review)
      .then((result) => {
        console.log('post result', result);
        this.fetchAPI();
      })
      .then((result) => {
        console.log('review was posted!', result);
      })
      .catch((err) => {
        console.log('review post failed', err);
      });
  }

  sortBy(sort) {
    this.setState({
      sort,
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
    // if all stars are on, only leave this star on
    if (this.state.filterQty === 5) {
      this.setState((prevState) => ({
        starFilters: {
          1: false,
          2: false,
          3: false,
          4: false,
          5: false,
          [star]: true,
        },
        filterQty: 1,
      }));
    } else if (this.state.starFilters[star] && this.state.filterQty === 1) {
      // if i'm turning off the last filter, then restore all stars
      this.setState({
        starFilters: {
          1: true,
          2: true,
          3: true,
          4: true,
          5: true,
        },
        filterQty: 5,
      });
    } else if (this.state.starFilters[star]) {
      // normal case: turn a star off
      this.setState((prevState) => ({
        starFilters: {
          ...prevState.starFilters,
          [star]: false,
        },
        filterQty: prevState.filterQty - 1,
      }));
    } else { // normal case: turn the star on
      this.setState((prevState) => ({
        starFilters: {
          ...prevState.starFilters,
          [star]: true,
        },
        filterQty: prevState.filterQty + 1,
      }));
    }
  }

  removeStarFilters() {
    this.setState({
      starFilters: {
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
      },
      filterQty: 5,
    });
  }

  render() {
    const {
      id, starFilters, filterQty, reviews, characteristics, ratings,
    } = this.state;
    const { TextButton, BorderedButton, ModalButton, WidgetTitle } = this.props;
    const scaleSelections = {
      Size: [
        'A size too small',
        '½ a size too small',
        'Perfect',
        '½ a size too big',
        'A size too wide'],
      Width: [
        'Too narrow',
        'Slightly narrow',
        'Perfect',
        'Slightly wide',
        'Too wide'],
      Comfort: [
        'Uncomfortable',
        'Slightly uncomfortable',
        'Ok',
        'Comfortable',
        'Perfect'],
      Quality: [
        'Poor',
        'Below average',
        'What I expected',
        'Pretty great',
        'Perfect'],
      Length: [
        'Runs Short',
        'Runs slightly short',
        'Perfect',
        'Runs slightly long',
        'Runs long'],
      Fit: [
        'Runs tight',
        'Runs slightly tight',
        'Perfect',
        'Runs slightly long',
        'Runs long'],
    };

    return (
      <div data-testid="reviewapp">
        <WidgetTitle>RATINGS & REVIEWS</WidgetTitle>
        <ReviewWidget>
          <ProductBreakdown
            id={id}
            avg={this.averageRating()}
            starFilters={starFilters}
            scale={characteristics}
            ratings={ratings}
            toggleStarFilter={this.toggleStarFilter.bind(this)}
            filterQty={filterQty}
            removeStarFilters={this.removeStarFilters.bind(this)}
            scaleSelections={scaleSelections}
            TextButton={TextButton}
          />
          <ReviewList
            id={id}
            reviews={reviews}
            starFilters={starFilters}
            sortBy={this.sortBy.bind(this)}
            postReview={this.postReview.bind(this)}
            putFeedback={this.putFeedback.bind(this)}
            characteristics={characteristics}
            scaleSelections={scaleSelections}
            TextButton={TextButton}
            BorderedButton={BorderedButton}
            ModalButton={ModalButton}
          />
        </ReviewWidget>
      </div>
    );
  }
}

export default ReviewApp;
