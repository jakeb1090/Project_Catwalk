import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import App from '../components/App';
import GetProducts from '../components/Questions/GetProducts';
import GetQuestions from '../components/Questions/GetQuestions';
import GetAnswers from '../components/Questions/GetAnswers';
import AddQuestion from '../components/Questions/AddQuestion';
import AddAnswer from '../components/Questions/AddAnswer';
import QuestionsList from '../components/Questions/QuestionsList';
import SearchQuestions from '../components/Questions/SearchQuestions';
import QuestionsMain from '../components/Questions/QuestionsMain';

import '@testing-library/jest-dom';

// test('renders App to DOM', () => {
//   render(<App />);
//   const appContainer = screen.queryByTestId('app');
//   expect(appContainer).toBeInTheDocument();
// });

test('renders Question widget to DOM', () => {
  render(<QuestionsMain />);
  const widgetContainer = screen.queryByTestId('question-widget');
  expect(widgetContainer).toBeInTheDocument();
});

test('renders List Container to DOM', () => {
  render(<QuestionsList />);
  const listContainer = screen.queryByTestId('list-container');
  expect(listContainer).toBeInTheDocument();
});

test('displays response out to console', () => {
  const moreQuestions = screen.findAllBy('button');
  fireEvent.click(moreQuestions).expect.toBe('object');
});
