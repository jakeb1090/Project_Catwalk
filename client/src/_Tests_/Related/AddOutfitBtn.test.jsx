import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect } from '@jest/globals';
import AddOutfitBtn from '../../components/Related/AddOutfitBtn';
import '@testing-library/jest-dom';

test('renders AddOutfitButton to the DOM', () => {
  render(<AddOutfitBtn />);
  expect(screen.getByRole('button', { name: /addOutfitBtn/i })).toBeInTheDocument();
});

test('should add current product to outfit carousel' , () => {
  const onAddOutfitClick = jest.fn()
  render(
    <AddOutfitBtn
      onClick={onAddOutfitClick}
    />
  )
    const addOutfitBtn = screen.getByRole('button', { name: /addOutfitBtn/i });
    userEvent.click(addOutfitBtn);
    expect(onAddOutfitClick.mock.calls.length).toBe(1);
});
