import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import RatingStars from '../../components/Related/RatingStars';
import '@testing-library/jest-dom';

test('should render RatingStar to the DOM', () => {
  render(<RatingStars />);
  const ratingStar = screen.getByTestId(/ratingStar/i);
  expect(ratingStar).toBeInTheDocument();
});
