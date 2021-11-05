import React from 'react';
import RatingBreakdown from './breakdownRating';
import ScaleBreakdown from './breakdownScale';

const ProductBreakdown = function (props) {
  const { id, scale, ratings, starFilters, filterQty } = props;
  const clickHandler = function (event) {
    event.preventDefault();
    props.removeStarFilters();
  }

  if (typeof ratings === 'object') {
    const stars = Object.keys(ratings).map(rating => {
      return <RatingBreakdown
        key={rating}
        star={rating}
        qty={ratings[rating]}
        toggleStarFilter={props.toggleStarFilter}
        removeStarFilters={props.removeStarFilter} />
    })
    return (
      <div data-testid="productBreakdown">
        <div>{stars}</div>
        {filterQty < 5 ?
          <div>
            <br></br>
            {`Filter: currently showing ${starFilters} star reviews`}
            <br></br>
            <button onClick={clickHandler}>Clear Filters</button>
          </div>
          : null}
        <h4>Characteristics</h4>
        <ScaleBreakdown scale={scale} />
      </div>
    );
  } else return null

}

export default ProductBreakdown;
