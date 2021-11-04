import React from 'react';

const RatingBreakdown = function (props) {
  const { qty, star, toggleStarFilter, removeStarFilters } = props;
  const clickHandler = function(event) {
    event.preventDefault();
    toggleStarFilter(Number(event.target.value));
  }
  if (qty) {
    return (
      <div>
        <button value={star} onClick={clickHandler}>{`${star} stars`}</button>
        [bar representing {qty} stars]
      </div>
    );
  } else return null
}
export default RatingBreakdown;
