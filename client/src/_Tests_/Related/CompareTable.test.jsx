import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import CompareTable from '../../components/Related/CompareTable';
import '@testing-library/jest-dom';

test('should render CompareTable to the DOM', () => {
  render(<CompareTable />);
  const compareTable = screen.getByRole('columnheader', { name: /Current Product/i });
  expect(compareTable).toBeInTheDocument();
});
