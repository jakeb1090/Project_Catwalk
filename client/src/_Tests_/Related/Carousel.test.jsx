import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import Carousel from '../../components/Related/Carousel';
import '@testing-library/jest-dom';

test('should render Carousel to the DOM', () => {
  const relation = {
    id: 2,
    img: '',
    title: '',
    price:'',
    salesPrice: null,
    avgRating: null,
    features: [],
  };
  const data = [relation, relation, relation];
  render(
    <Carousel
      data={data}
      btn='delete'
    />
  );
  const carousel = screen.getByTestId('carousel');
  expect(carousel).toBeInTheDocument();
});
