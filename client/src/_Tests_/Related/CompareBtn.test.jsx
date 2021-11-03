import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import CompareBtn from '../../components/Related/CompareBtn';

test('should render CompareBtn to the DOM', () => {
  render(<CompareBtn />);
  const compareBtn = screen.getByRole('button', { name: /compareBtn/i });
  expect(compareBtn).toBeInTheDocument();
});
