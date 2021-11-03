import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import Carousel from '../../components/Related/Carousel';
import '@testing-library/jest-dom';

test('should render Carousel to the DOM', () => {
  let related = [];
  for (let i = 0; i < 3; i++) {
    let current = {
      id: i,
      img: '',
      title: '',
      price:'',
      salesPrice: null,
      avgRating: null,
      features: [],
    }
    debugger;
    related.push(current);
  }
  debugger;
  render(
    <Carousel
      data={related}
      btn='delete'
    />
  );
  const carousel = screen.getByTestId('carousel');
  expect(carousel).toBeInTheDocument();
});
