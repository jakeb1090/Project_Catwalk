import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import AddOutfitBtn from '../../components/Related/AddOutfitBtn';
import '@testing-library/jest-dom';

test('renders AddOutfitButton to the DOM', () => {
  render(<AddOutfitBtn />);
  expect(screen.getByRole('button', { name: /addOutfitBtn/i })).toBeInTheDocument();
});
