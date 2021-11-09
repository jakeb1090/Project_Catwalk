import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import {
  test,
  expect,
  beforeAll,
  afterAll,
  afterEach,
} from '@jest/globals';
import MSWTest from '../../components/Related/MSWTest';
import '@testing-library/jest-dom';
import server from '../utils.test';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test('should render product name to the DOM', async () => {
  render(<MSWTest
    currentProduct={61916}
  />);
  await waitFor(() => expect(screen.getByRole('heading', { name: /Maximo 1000 Backpack/i })).toBeInTheDocument());
  // const name = screen.getByRole('heading', { name: /Maximo 1000 Backpack/i });
  // expect(name).toBeInTheDocument();
});
