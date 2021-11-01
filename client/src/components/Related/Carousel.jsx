import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import ForwardArrow from './ForwardArrow';
import ReverseArrow from './ReverseArrow';

const Carousel = () => (
  <div data-testid="carousel">
    <ReverseArrow />
    <Card />
    <ForwardArrow />
  </div>
);

export default Carousel;
