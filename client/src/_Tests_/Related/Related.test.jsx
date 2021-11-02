import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import Related from '../../components/Related/Related';
import '@testing-library/jest-dom';

render(<Related />);

test('renders Related to DOM', () => {
  const relatedContainer = screen.getByTestId('related');
  const relatedHeader = screen.getByRole('heading', { name: /loading.../i });

  expect(relatedContainer).toBeInTheDocument();
  expect(relatedHeader).toBeInTheDocument();
});
