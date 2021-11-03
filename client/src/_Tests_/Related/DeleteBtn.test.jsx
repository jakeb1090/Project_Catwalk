import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import DeleteBtn from '../../components/Related/DeleteBtn';
import '@testing-library/jest-dom';

test('should render DeleteBtn to the DOM', () => {
  render(<DeleteBtn />);
  const deleteBtn = screen.getByRole('button', { name: 'deleteBtn' });
  expect(deleteBtn).toBeInTheDocument();
});
