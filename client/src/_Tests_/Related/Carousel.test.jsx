import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import Carousel from '../../components/Related/Carousel';
import '@testing-library/jest-dom';

test('should render Carousel to the DOM', () => {
  render(<Carousel />);
  const carousel = screen.getByTestId('carousel');
  expect(carousel).toBeInTheDocument();
});
