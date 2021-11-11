import React from 'react';
import styled from 'styled-components';

// const ClickedFilterButton = styled(FilterButton)`
// border: green
// `;

const BarGraph = styled.div`
margin-top: 15px;
display:flex;
flex-direction: row;
align-items: stretch;
height: 1em;

`;
//I broke my filter button!
const FilterButton = styled(BarGraph)`
background-color: white;
border: white;
text-align: center;
// display: inline-block;
font-size: 16px;
text-decoration: underline;
`;
const FilledBar = styled(BarGraph)`
  background-color: green;
  justify-content: center;
  //first flex number = ratings qty
  flex: ${props => props.qty} 1 0;

`;
const EmptyBar = styled(BarGraph)`
background-color: #c4c4c4;
//first flex number = reviews.length - ratings qty
flex: ${props => props.empty} 1 0;

`;

const RatingBreakdown = function (props) {
  const {
    qty, totalReviews, star, toggleStarFilter, removeStarFilters,
  } = props;

  const clickHandler = function (event) {
    event.preventDefault();
    toggleStarFilter(Number(event.target.value));
  };

  if (!qty) { return null; }

  return (
    <div data-testid="ratingBreakdown">
      <BarGraph>
        <FilterButton value={star}
          // style={(filter is on ? styles.greenButton : style.greyButton)}
          onClick={clickHandler}
        >
          {`${star} stars`}
        </FilterButton>
        <FilledBar qty={qty} />
        <EmptyBar empty={totalReviews - qty} />
      </BarGraph>
    </div>
  );
};
export default RatingBreakdown;
