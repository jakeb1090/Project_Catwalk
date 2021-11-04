import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import '@testing-library/jest-dom';
import QuestionsMain from '../../components/Questions/QuestionsMain';



describe('QuestionsMain container', () => {

  test('should render QuestionList component', () => {
    render(<QuestionsMain />);
    const component = screen.getByTestId('questions-widget');
    expect(component).toBeInTheDocument();
  });
  test('"More Answered Question" should change state when clicked', () => {
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const outputElement = screen.getByText('')
  })
});
