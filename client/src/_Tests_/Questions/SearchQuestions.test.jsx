import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { test, expect, describe } from '@jest/globals';
import '@testing-library/jest-dom';
import SearchQuestions from '../../components/Questions/SearchQuestions';

describe('search bar component', () => {
  test('should render search bar to DOM', () => {
    render(<SearchQuestions />);
    const element = screen.getByTestId('search');
    expect(element).toBeInTheDocument();
  });
  test('should accept text as input', () => {
    render(<SearchQuestions />);
    const textInput = screen.getByRole()
  });


  // test('should trigger handler search bar', () => {
  //   const handleSearch = jest.fn();
  //   render(<SearchQuestions onSearch={handleSearch} />);
  //   expect(handleSearch).toHaveBeenCalledWith('test');
  // });
});
