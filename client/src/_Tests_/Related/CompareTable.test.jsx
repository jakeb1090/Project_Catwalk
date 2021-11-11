import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import CompareTable from '../../components/Related/CompareTable';
import '@testing-library/jest-dom';

test('should render CompareTable to the DOM', () => {
  const data = [
    ['Maximo 1000 Backpack', null, 'shoes'],
    [null, 'Sustainably Sourced', true],
    ['cotten', 'fabric', 'linen'],
  ];
  render(
    <CompareTable
      data={data}
    />,
  );
  const compareTable = screen.getByRole('columnheader', { name: /Maximo 1000 Backpack/i });
  expect(compareTable).toBeInTheDocument();
});
