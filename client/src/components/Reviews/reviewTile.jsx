import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import checkmark from './graphics/checkmark.jpeg'
// I need to make sure 'jpeg' is an accepted file format

const ReviewTile = (props) => {
  const { review, putFeedback } = props;

  // date garbage
  const year = review.date.slice(0, 4);
  const month = review.date.slice(5, 7);
  const day = review.date.slice(8, 10);
  let formattedDate = new Date(Date.UTC(year, month, day));
  formattedDate = formattedDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

  const handleClick = function (event) {
    putFeedback(event.target.name, review.review_id);
  };
  return (
    <div data-testid="ReviewTile" key={review.review_id}>
      <br />
      <div>
        {`Number of stars: ${review.rating}`}
      </div>
      <div>
        {`Reviewer Name: ${review.reviewer_name}, ${formattedDate}`}
      </div>
      <div>
        {review.summary}
      </div>
      <div>
        {review.body}
      </div>
      <div>
        {review.recommend
          ? (
            <div>
              {/* <img src={checkmark} alt="checkmark image" /> */}
              I recommend this product
            </div>
          )
          : null}
      </div>
      <div>
        {review.response ? `Response from seller: ${review.response}` : null}
      </div>
      <div>
        Was this review helpful?
        <button data-testid="helpfulButton" name="helpful" onClick={handleClick}>
          {' '}
          {`Yes (${review.helpfulness})`}
          {' '}
        </button>
      </div>
      <button data-testid="reportButton" name="report" onClick={handleClick}>Report</button>
      <br />
    </div>
  );
};

ReviewTile.propTypes = {
  review_id: PropTypes.number,
  summary: PropTypes.string,
  response: PropTypes.string,
  qty: PropTypes.number,
  star: PropTypes.number,
  review: PropTypes.object
};
export default ReviewTile;