import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import CardImg from '../../components/Related/CardImg';

test('should render CardImg to the DOM', () => {
  render(
    <CardImg
      src="test"
      alt="test"
    />,
  );
  expect(screen.getByAltText(/product/i)).toBeInTheDocument();
});
