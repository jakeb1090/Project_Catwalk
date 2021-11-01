import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import '@testing-library/jest-dom';
import QuestionElement from '../../components/Questions/QuestionElement';

describe('Qustion element component', () => {
  test('should render component', () => {
    render(<QuestionElement />);
    const component = screen.getByTestId('question-element');
    expect(component).toBeInTheDocument();
  });
});
