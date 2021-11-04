import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect } from '@jest/globals';
import DeleteBtn from '../../components/Related/DeleteBtn';
import '@testing-library/jest-dom';

test('should render DeleteBtn to the DOM', () => {
  render(<DeleteBtn />);
  const deleteBtn = screen.getByRole('button', { name: /deleteBtn/i });
  expect(deleteBtn).toBeInTheDocument();
});

test('should call fucntion when clicked', () => {
  const onDeleteOutfitClick = jest.fn((id) => id);
  render (
    <DeleteBtn
      onDeleteOutfitClick={onDeleteOutfitClick}
      id={4}
    />
  )
  const deleteBtn = screen.getByRole('button', { name: /deleteBtn/i });
  userEvent.click(deleteBtn);
  expect(onDeleteOutfitClick.mock.calls.length).toBe(1);
  expect(onDeleteOutfitClick.mock.results[0].value).toBe(4)
})
