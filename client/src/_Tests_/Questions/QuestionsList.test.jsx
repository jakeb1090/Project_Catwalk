import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import '@testing-library/jest-dom';
import QuestionsList from '../../components/Questions/QuestionsList';

describe('Question List for indivdual product', () => {
  test('should render element to the DOM', () => {
    render(<QuestionsList />);
    const listElement = screen.getByTestId('questions-list');
    expect(listElement).toBeInTheDocument();
  });
});
