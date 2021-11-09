import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe, jest } from '@jest/globals';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import QuestionsMain from '../../components/Questions/QuestionsMain';

describe('QuestionsMain container', () => {
  test('should render QuestionList component', () => {
    render(<QuestionsMain currentProduct={61601} />);
    const component = screen.getByTestId('questions-widget');
    expect(component).toBeInTheDocument();
  });
  test('clicking "More Answered Question" trigger event', () => {
    render(<QuestionsMain currentProduct={60161} />);
    const mockFn = jest.fn();
    const buttons = screen.getByText(/2/);
    userEvent.click(buttons, mockFn);
    expect(mockFn).toHaveBeenCalled();
  });
});
