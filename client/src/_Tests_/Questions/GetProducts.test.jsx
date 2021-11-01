import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import GetProducts from '../../components/Questions/GetProducts';

describe('Get Products button and API functionality', () => {
  test('should not render button to the DOM', () => {
    render(<GetProducts />);
    const buttonElement = screen.getByTestId('');
    expect(buttonElement).not.toBeInTheDocument();
  });
});
