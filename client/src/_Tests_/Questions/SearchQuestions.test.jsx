import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import '@testing-library/jest-dom';
import SearchQuestions from '../../components/Questions/SearchQuestions';

describe('search bar component', () => {
  test('should render search bar component', () => {
    render(<SearchQuestions />);
    const placeHolderText = screen.getByPlaceHolderText(/have a question/i);
    expect(placeHolderText).toBeInDocument();
  });
});
