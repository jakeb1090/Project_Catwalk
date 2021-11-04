import React from 'react';

const ReviewTile = (props) => {
  const { review } = props;
  const formattedDate = new Date(review.date).toDateString();
  return (
    <div key={review.review_id}>
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
        {review.recommend ? 'I recommend this product' : null}
      </div>
      <div>
        {review.response ? `Response from seller: ${review.response}` : null}
      </div>
      <div>
        Was this review helpful?
        <button> {`Yes (${review.helpfulness})`} </button>
      </div>
      <button>Report</button>
      <br />
    </div>
  );
};

export default ReviewTile;