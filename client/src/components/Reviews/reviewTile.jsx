import React from 'react';

const ReviewTile = (props) => {
  const { review,  putFeedback} = props;
  const formattedDate = new Date(review.date).toDateString();
  const handleClick = function (event) {
    putFeedback(event.target.name, review.review_id)
  }
  console.log(review.date)
  const year = review.date.slice(0,4)
  const month= review.date.slice(5,7)
  const day = review.date.slice(8,10)
  console.log(year, month, day)
  return(
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
        <button name="helpful" onClick={handleClick}> {`Yes (${review.helpfulness})`} </button>
      </div>
      <button name="report" onClick={handleClick}>Report</button>
      <br />
    </div>
  );
};

export default ReviewTile;