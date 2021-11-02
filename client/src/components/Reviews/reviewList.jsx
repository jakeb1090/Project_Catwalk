import React from 'react';
import PropTypes from 'prop-types';

const ReviewList = (props) => {
  console.log('ReviewList props', props);
  const { reviews } = props;
  return (
    <div data-testid="reviewList">
      Review List: individual reviews will appear here
      {/* <ReviewTile reviews={reviews} /> */}
    </div>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array,
  id: PropTypes.number,
};

const ReviewTile = (props) => {
  const { reviews } = props;
  return (
    <div>
      Review TileÎ
      {reviews[0]}
    </div>
  );
};

export default ReviewList;
