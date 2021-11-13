import React from 'react';
import styled from 'styled-components';

// const ClickedFilterButton = styled(FilterButton)`
// border: green
// `;

const BarGraph = styled.div`
margin: 10px 0px;
display:flex;
flex-direction: row;
height: 1em;
`;

const FilledBar = styled.div`
  & {
    width: 100%;
    // padding: 0.5em;
    background-color: #d6d6d6; //gray
    position: relative;
    // height: 50%;
    align-items: end; //this isn't working
  }
  &:after {
    content: ' ';
    color: #0abf00; //green
    position:absolute;
    background: #0abf00; //green
    top:0; bottom:0;
    left:0;
    width:${props => props.percent}%;
  }
`;

const FilterButton = styled.button`
  background-color: white;
  text-align: left;
  font-size: 16px;
  text-decoration: underline;
  width: 30%;
  border: none;
  font-family: Georgia, serif;
  align-items: start;

`

const RatingBreakdown = (props) => {
  const {
    qty, totalReviews, star, toggleStarFilter, removeStarFilters
  } = props;

  const clickHandler = function (event) {
    event.preventDefault();
    toggleStarFilter(Number(event.target.value));
  };

  if (!qty) { return null; }

  return (
    <BarGraph data-testid="ratingBreakdown">
      <FilterButton value={star}
        // style={(filter is on ? styles.greenButton : style.greyButton)}
        onClick={clickHandler}
      >
        {`${star} stars`}
      </FilterButton>
      <FilledBar percent={qty / totalReviews * 100} />
    </BarGraph>
  );
};
export default RatingBreakdown;
