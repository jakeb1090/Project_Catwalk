import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import ForwardArrow from '../../components/Related/ForwardArrow';
import '@testing-library/jest-dom';

test('should render ForwardArrow to the DOM', () => {
  render(<ForwardArrow />);
  const forwardArrow = screen.getByRole('button', { name: /forwardArrow/i });
  expect(forwardArrow).toBeInTheDocument();
});
