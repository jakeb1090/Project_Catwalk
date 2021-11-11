import React from 'react';
import styled from 'styled-components';
import RatingBreakdown from './breakdownRating';
import ScaleBreakdown from './breakdownScale';

const Breakdown = styled.div`
  flex: 1 1 0;
  align-items: flex-end;
  padding: 10px;
`;

const FlexRow = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;
const Average = styled.h2`
  font-size: 100px;
  margin:0px;
`;

const ProductBreakdown = function (props) {
  const {
    id, scale, ratings, starFilters, filterQty,
  } = props;
  const clickHandler = function (event) {
    event.preventDefault();
    props.removeStarFilters();
  };
  const totalReviews = Object.values(ratings).reduce((a, b) => Number(a) + Number(b))

  if (typeof ratings !== 'object') { return null; }

  const stars = Object.keys(ratings).map((rating) => (
    <RatingBreakdown
      key={rating}
      star={rating}
      qty={ratings[rating]}
      totalReviews={totalReviews}
      toggleStarFilter={props.toggleStarFilter}
      removeStarFilters={props.removeStarFilter}
    />
  ));
  const starRating = Object.keys(starFilters).map((star) => (
    <div>
      {star <= Math.floor(props.avg) ? '★' : '☆'}
    </div>
  ))

  return (
    <Breakdown data-testid="productbreakdown">
      <FlexRow>
        <Average>{props.avg}</Average>
        <FlexRow>{starRating}</FlexRow>
      </FlexRow>
      <div>{stars}</div>
      {filterQty < 5
        ? (
          <div>
            <br />
            {`Filter: currently showing ${Object.keys(starFilters).map((star) => {
              if (starFilters[star]) {
                return star;
              }
            })} star reviews`}
            <br />
            <button onClick={clickHandler}>Clear Filters</button>
          </div>
        )
        : null}
      <h4>Characteristics</h4>
      <ScaleBreakdown scale={scale} />
    </Breakdown>
  );
};

export default ProductBreakdown;
