import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import ReviewApp from '../../components/Reviews/reviewapp';
import '@testing-library/jest-dom';

test('renders Review widget to DOM', () => {
  render(<ReviewApp />);
  const appContainer = screen.queryByTestId('reviewapp');
  expect(appContainer).toBeInTheDocument();
});

test('renders Product Breakdown to DOM', () => {
  render(<ReviewApp />);
  const appContainer = screen.queryByTestId('productbreakdown');
  expect(appContainer).toBeInTheDocument();
});
