import React from 'react';
import PropTypes from 'prop-types';

const ReviewList = (props) => {
  const { reviews } = props;
  if (typeof reviews === 'object') {
    const tile = reviews.map((review) => {
      if (review.rating === 3) {
        return <ReviewTile review={review} />;
      }
    });

    return (
      <div>
        <div>
          <h4>Review List</h4>
          {`Number of reviews: ${reviews.length}`}
        </div>
        <div>
          Sorted by:
          <select>
            <option>Relevance</option>
            <option>Date</option>
            <option>Helpfulness</option>
          </select>
          {tile}
          <button>Load More</button>
          <button>Add Review</button>
        </div>
      </div>
    );
  } return null;
};

ReviewList.propTypes = {
  reviews: PropTypes.array,
  id: PropTypes.number,
};

const ReviewTile = (props) => {
  const { review } = props;
  const formattedDate = new Date(review.date).toDateString();
  return (
    <div>
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
        <button> Yes </button>
        {/* {review.helpfulness} */}
      </div>
      <button>Report</button>
      <br />
    </div>
  );
};

export default ReviewList;

// individual ReviewTile object:
// body: "Qui odit qui accusantium rerum laboriosam incidunt porro necessitatibus impedit. Omnis assumenda ut voluptas ex eos placeat reiciendis alias deserunt. Voluptate quidem qui est tenetur non sunt deserunt nihil. Voluptas quia aut sint veniam officia. Molestias sit illo sed itaque. Dolores occaecati tempore nihil tempore unde sint odit aut iusto."
// date: "2021-04-25T00:00:00.000Z"
// helpfulness: 29
// photos: [{…}]
// rating: 3
// recommend: true
// response: null
// review_id: 1055695
// reviewer_name: "Ward_Cartwright23"
// summary: "Et repudiandae corporis consequatur voluptas animi.
