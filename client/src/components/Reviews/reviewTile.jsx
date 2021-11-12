import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import checkmark from './graphics/checkmark.jpeg'
// I need to make sure 'jpeg' is an accepted file format

// const TextButton = styled.button`
// background-color: #e1bfff;
// border: white;
// text-align: center;
// font-size: 16px;
// text-decoration: underline;
// `;

const Line = styled.div`
padding: 2% 0px;
line-height: 125%;
`;
const TopLine = styled(Line)`
display: flex;
flex-direction: row;
justify-content: space-between;
`;
const BoldLine = styled(Line)`
  font-weight: bold;
`;

const ReviewTile = (props) => {
  const { review, putFeedback, Tile, TextButton } = props;

  // date garbage
  const year = review.date.slice(0, 4);
  const month = review.date.slice(5, 7);
  const day = review.date.slice(8, 10);
  let formattedDate = new Date(Date.UTC(year, month, day));
  formattedDate = formattedDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

  const stars = (n) => {
    var stars = '';
    for (let i = 0; i < 5; i += 1) {
      if (i < n) {
        stars += '★';
      } else {
        stars += '☆';
      }
    }
    return stars;
  };

  const handleClick = function (event) {
    putFeedback(event.target.name, review.review_id);
  };
  return (
    <Tile data-testid="ReviewTile" key={review.review_id}>
      <TopLine>
        <div>{stars(review.rating)}</div>
        <div>{`${review.reviewer_name}, ${formattedDate}`}</div>
      </TopLine>

      <BoldLine>{review.summary}</BoldLine>
      <Line>{review.body}</Line>
      <Line>
        {review.recommend
          ? (
            <div>
              ✓ I recommend this product
            </div>
          )
          : null}
      </Line>
      <Line>
        {review.response ? `Response from seller: ${review.response}` : null}
      </Line>
      <div>
        Helpful?
        <TextButton data-testid="helpfulButton" name="helpful" onClick={handleClick}>
          {`Yes (${review.helpfulness})`}
        </TextButton> |
        <TextButton data-testid="reportButton" name="report" onClick={handleClick}>Report</TextButton>
      </div>
      <br />
    </Tile>
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
