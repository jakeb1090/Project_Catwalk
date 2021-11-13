import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// text-shadow: 0 1px 0 #a2a2a2;
// height: 25px;
// margin: 0 auto;
// unicode-bidi: bidi-override;
// width: 125px;
const Stars = styled.div`
  color: #c5c5c5;
  font-size: 1em;
  position: relative;
  &:before {
    content: '★★★★★';
    opacity: 0.3;
  };
  &:after {
    width: ${({ value }) => (value * 100) / 5}%;
    color: black;
    content: '★★★★★';
    position: absolute;
    z-index: 1;
    display: block;
    left: 0;
    top:0;
    overflow: hidden;
  };
  `;
  // width: attr(rating);
  // text-shadow: 0 1px 0 #ab5414;
const RatingStars = (props) => {
  const { value } = props;
  return (
    <Stars data-testid="ratingStar" value={value} />
  );
};

RatingStars.propTypes = {
  value: PropTypes.number.isRequired,
};

export default RatingStars;
