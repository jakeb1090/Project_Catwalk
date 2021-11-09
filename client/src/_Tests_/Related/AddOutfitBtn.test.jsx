import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  test,
  expect,
  jest,
  beforeAll,
  afterAll,
  afterEach,
  describe,
} from '@jest/globals';
import AddOutfitBtn from '../../components/Related/AddOutfitBtn';
import '@testing-library/jest-dom';
import Related from '../../components/Related/Related';
import server from '../utils.test';

describe('integration test', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  test('should be able to add current product and delete product from outfit', async () => {
    const currentProduct = 61916;
    const onRelatedClick = jest.fn(() => {});
    render(
      <Related
        currentProduct={currentProduct}
        onRelatedClick={onRelatedClick}
      />,
    );

    await waitFor(() => screen.getByRole('button', { name: /addOutfitBtn/i }));
    userEvent.click(screen.getByRole('button', { name: /addOutfitBtn/i }));

    expect(() => screen.getByRole('button', { name: /deleteBtn/i })).toThrow();

    await waitFor(() => screen.getByRole('button', { name: /deleteBtn/i }));
    const deleteBtn = screen.getByRole('button', { name: /deleteBtn/i });
    expect(deleteBtn).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /deleteBtn/i }));
    expect(deleteBtn).not.toBeInTheDocument();
  });
});

test('renders AddOutfitButton to the DOM', () => {
  const onAddOutfitClick = jest.fn();
  render(
    <AddOutfitBtn
      onClick={onAddOutfitClick}
    />,
  );
  expect(screen.getByRole('button', { name: /addOutfitBtn/i })).toBeInTheDocument();
});

test('should call function when clicked', () => {
  const onAddOutfitClick = jest.fn();
  render(
    <AddOutfitBtn
      onAddOutfitClick={onAddOutfitClick}
    />,
  );
  const addOutfitBtn = screen.getByRole('button', { name: /addOutfitBtn/i });
  userEvent.click(addOutfitBtn);
  expect(onAddOutfitClick.mock.calls.length).toBe(1);
});
