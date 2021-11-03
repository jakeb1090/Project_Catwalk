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
        <button value={qty} onClick={clickHandler}>{`${qty} stars`}</button>
        [bar representing {star} stars]
      </div>
    );
  } else return null
}
export default RatingBreakdown;
