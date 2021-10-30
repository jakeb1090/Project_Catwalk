import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import ReverseArrow from '../../components/Related/ReverseArrow';
import '@testing-library/jest-dom';

test('should render ForwardArrow to the DOM', () => {
  render(<ReverseArrow />);
  const reverseArrow = screen.getByRole('button', { name: /reverseArrow/i });
  expect(reverseArrow).toBeInTheDocument();
});
