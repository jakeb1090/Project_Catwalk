import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import '@testing-library/jest-dom';
import AddQuestion from '../../components/Questions/AddQuestion';

describe('Add Question button', () => {
  test('should not be rendered to DOM', () => {
    render(<AddQuestion />);
    const buttonElement = screen.getByTestId('add-question');
    expect(buttonElement).not.BeInTheDocument();
  });
});
