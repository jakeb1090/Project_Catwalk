import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import {
  test,
  expect,
  jest,
  beforeAll,
  afterAll,
  afterEach,
} from '@jest/globals';
import Modal from '../../components/Related/Modal';
import Related from '../../components/Related/Related';
import '@testing-library/jest-dom';
import server from '../utils.test';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test('should render Modal to the DOM', () => {
  const mockShowModal = jest.fn();
  const mockHideModal = jest.fn();
  const mockData = [[null, null, null], [null, null, null], [null, null, null]];
  render(<Modal
    showModal={mockShowModal}
    hideModal={mockHideModal}
    data={mockData}
  />);
  const modal = screen.getByTestId(/modal/i);
  expect(modal).toBeInTheDocument();
});

test('should show hide/modal', async () => {
  const currentProduct = 61916;
  const onRelatedClick = jest.fn(() => {});
  render(
    <Related
      currentProduct={currentProduct}
      onRelatedClick={onRelatedClick}
    />,
  );

  await waitFor(() => screen.getAllByRole('button', { name: /compareBtn/i }));
  const compareBtn = screen.getAllByRole('button', { name: /compareBtn/i })[0];
  expect(
    window
      .getComputedStyle(screen.getByTestId(/modal/i))
      .getPropertyValue('display'),
  ).toEqual('none');
  fireEvent.click(compareBtn);
  await waitFor(() => expect(
    window
      .getComputedStyle(screen.getByTestId(/modal/i))
      .getPropertyValue('display'),
  ).toEqual('block'));
  fireEvent.click(screen.getByRole('button', { name: /modalClose/i }));
  expect(
    window
      .getComputedStyle(screen.getByTestId(/modal/i))
      .getPropertyValue('display'),
  ).toEqual('none');
});
