import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import '@testing-library/jest-dom';
import GetMoreQuestions from '../../components/Questions/GetMoreQuestions';

describe('Get More Questions button', () => {
  test('should render button to DOM', () => {
    render(<GetMoreQuestions />);
    const buttonElement = screen.queryByTestId('more-questions');
    expect(buttonElement).toBeInTheDocument();
  });
});
