import React from 'react';
import RatingBreakdown from './breakdownRating';
import ScaleBreakdown from './breakdownScale';

const ProductBreakdown = function (props) {
  const { id, scale, ratings, starFilters } = props;
  const clickHandler = function (event) {
    event.preventDefault();
    props.removeStarFilters();
  }

  if (typeof ratings === 'object') {
    const stars = Object.keys(ratings).map(rating => {
      return <RatingBreakdown qty={rating} star={ratings[rating]} toggleStarFilter={props.toggleStarFilter} removeStarFilters={props.removeStarFilter} />
    })
    return (
      <div data-testid="productBreakdown">
        <RatingBreakdown ratings={ratings} />
        <div>{stars}</div>
        <div>
          {`Filter: currently showing ${starFilters} star reviews`}
        </div>
        <div>
          <button onClick={clickHandler}>Clear Filters</button>
        </div>
        <h4>Characteristics</h4>
        <ScaleBreakdown scale={scale} />
      </div>
    );
  } else return null

}

export default ProductBreakdown;
