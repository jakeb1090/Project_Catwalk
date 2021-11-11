import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  test,
  expect,
  jest,
  beforeAll,
  afterAll,
  afterEach,
} from '@jest/globals';
import '@testing-library/jest-dom';
import Modal from '../../components/Related/Modal';
import Related from '../../components/Related/Related';
import server from '../utils.test';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test('should render Modal to the DOM', () => {
  const mockHideModal = jest.fn();
  const mockData = [['brass', 'buttons', 'ivory'], ['cotten', 'material', 'linen'], [true, 'sustainable', null]];
  render(<Modal
    showModal
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
  userEvent.click(compareBtn);
  await waitFor(() => expect(
    window
      .getComputedStyle(screen.getByTestId(/modal/i))
      .getPropertyValue('display'),
  ).toEqual('block'));
  userEvent.click(screen.getByRole('button', { name: /modalClose/i }));
  expect(
    window
      .getComputedStyle(screen.getByTestId(/modal/i))
      .getPropertyValue('display'),
  ).toEqual('none');
});
