import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import '@testing-library/jest-dom';
import QuestionsMain from '../../components/Questions/QuestionsMain';

describe('Main Q&A Widget Container', () => {
  test('should render widget container', () => {
    render(<QuestionsMain />);
    const element = screen.getByTestId('questions-widget');
    expect(element).toBeInTheDocument();
  });
});
