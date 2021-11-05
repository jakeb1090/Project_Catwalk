import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  test, expect, describe, jest,
} from '@jest/globals';
import '@testing-library/jest-dom';
import SearchQuestions from '../../components/Questions/SearchQuestions';

describe('search bar component', () => {
  test('should render search bar to DOM', () => {
    render(<SearchQuestions />);
    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();
  });
  test('should change value for text input', () => {
    render(<SearchQuestions />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'pants');
    expect(input).toHaveValue('pants');
  });
  test('should trigger event listener', () => {
    const handleChange = jest.fn();
    render(<SearchQuestions updateSearch={handleChange} />);
    const element = screen.getByRole('textbox');
    userEvent.type(element, 'four');
    expect(handleChange).toHaveBeenCalledTimes(4);
  });
});
