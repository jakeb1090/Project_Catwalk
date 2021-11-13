import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
const RatingStars = ({ value }) => (
  <Stars data-testid="ratingStar" value={value} />
);

RatingStars.propTypes = {
  value: PropTypes.number.isRequired,
};

export default RatingStars;
