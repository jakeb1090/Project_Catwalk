import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import '@testing-library/jest-dom';
import AddAnswer from '../../components/Questions/AddAnswer';

describe('Add Answer button', () => {
  test('should not render button to DOM', () => {
    render(<AddAnswer />);
    const component = screen.getByTestId('add-answer');
    expect(component).not.toBeInDocument();
  });
});
