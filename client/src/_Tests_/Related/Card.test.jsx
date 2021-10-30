import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import Card from '../../components/Related/Card';
import '@testing-library/jest-dom';

test('should render Card to the DOM', () => {
  render(<Card />);
  const cardContainer = screen.getByTestId('card');
  expect(cardContainer).toBeInTheDocument();
});
