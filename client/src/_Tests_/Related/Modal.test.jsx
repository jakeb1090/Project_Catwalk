import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import Modal from '../../components/Related/Modal';
import '@testing-library/jest-dom';

test('should render Modal to the DOM', () => {
  render(<Modal />);
  const modal = screen.getByTestId(/modal/i);
  expect(modal).toBeInTheDocument();
});
