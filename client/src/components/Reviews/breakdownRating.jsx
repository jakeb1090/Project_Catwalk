import React from 'react';

const RatingBreakdown = function (props) {
  const {
    qty, star, toggleStarFilter, removeStarFilters,
  } = props;

  const clickHandler = function (event) {
    event.preventDefault();
    toggleStarFilter(Number(event.target.value));
  };

  if (!qty) { return null; }

  return (
    <div data-testid="ratingBreakdown">
      <button
        value={star}
        // style={(filter is on ? styles.greenButton : style.greyButton)}
        onClick={clickHandler}>
        {`${star} stars`}
      </button> `[bar representing ${qty} stars]`
    </div>
  );
};
export default RatingBreakdown;
