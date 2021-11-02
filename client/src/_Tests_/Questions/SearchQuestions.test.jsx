import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import '@testing-library/jest-dom';
import SearchQuestions from '../../components/Questions/SearchQuestions';

describe('search bar component', () => {
  test('should render search bar to DOM', () => {
    render(<SearchQuestions />);
    const element = screen.getByTestId('search');
    expect(element).toBeInTheDocument();
  });
  // test('should trigger handler search bar', () => {
  //   const handleSearch = jest.fn();
  //   render(<SearchQuestions onSearch={handleSearch} />);
  //   expect(handleSearch).toHaveBeenCalledWith('test');
  // });
});
