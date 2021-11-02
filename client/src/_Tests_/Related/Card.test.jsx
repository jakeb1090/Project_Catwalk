import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import Card from '../../components/Related/Card';
import '@testing-library/jest-dom';

test('should render Card to the DOM', () => {
  const relation = {
    id: 2,
    img: '',
    title: '',
    price:'',
    salesPrice: null,
    avgRating: null,
    features: [],
  };
  render(
    <Card
      key={relation.id}
      product={relation}
      btn={'delete'}
    />
  );
  const cardContainer = screen.getByTestId('card');
  expect(cardContainer).toBeInTheDocument();
});
