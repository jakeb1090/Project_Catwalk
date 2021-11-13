import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import utils from './utils';

const Tile = styled.section`
  border-bottom: solid;
  padding: 10px;
  margin: 10px 0px;
`;

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

const ReviewTile = ({ review, putFeedback, TextButton }) => {
  const formattedDate = utils.date(review.date);

  const handleClick = function (event) {
    putFeedback(event.target.name, review.review_id);
  };
  return (
    <Tile data-testid="ReviewTile" key={review.review_id}>
      <TopLine>
        <div>{utils.stars(review.rating)}</div>
        <div>{`${review.reviewer_name}, ${formattedDate}`}</div>
      </TopLine>

      <BoldLine>{review.summary}</BoldLine>
      <Line>{review.body}</Line>
      <div>
        {review.recommend
          ? (
            <Line>
              ✓ I recommend this product
            </Line>
          )
          : null}
      </div>
      <div>
        {review.response ? `Response from seller: ${review.response}` : null}
      </div>
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
