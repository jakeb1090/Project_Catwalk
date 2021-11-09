import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { test, expect } from '@jest/globals';
import Card from '../../components/Related/Card';
import '@testing-library/jest-dom';

test('should render Card to the DOM', () => {
  const relation = {
    id: 65126,
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

test('should call function with id parameter when clicked', () => {
  const onRelatedClick = jest.fn((id) => id);
  const product = {
    id: 4,
    img: '',
    title: '',
    price:'',
    salesPrice: null,
    avgRating: null,
    features: [],
  };
  render(
    <Card
      key={product.id}
      id={product.id}
      onRelatedClick={onRelatedClick}
      product={product}
      btn={''}
    />
  )
  const cardContainer = screen.getByTestId('card');
  userEvent.click(cardContainer);
  expect(onRelatedClick.mock.results[0].value).toBe(4);
});
