import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import '@testing-library/jest-dom';
import AnswerInnerList from '../../components/Questions/AnswerInnerList';

describe('Answer List container per question', () => {
  const answers = {
    4996635: {
      id: 4996635,
      body: 'Mine was delivered from Oklahoma',
      date: '2017-11-04T00:00:00.000Z',
      answerer_name: 'toofast',
      helpfulness: 14,
      photos: [],
    },
    4996646: {
      id: 4996646,
      body: 'It ships from the facility in Tulsa',
      date: '2017-11-04T00:00:00.000Z',
      answerer_name: 'toofast',
      helpfulness: 19,
      photos: [],
    },
  };

  test('should render answer container in the DOM', () => {
    render(<AnswerInnerList />);
    const container = screen.getByTestId('answer-container');
    expect(container).toBeInTheDocument();
  });
  test('should render list component', () => {
    render(<AnswerInnerList />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });
  test('should render answer from list', () => {
    const { AnswerElement } = render(<AnswerInnerList answers={answers} />);
    render(AnswerElement);
    const answerText = screen.getByText(/Tulsa/i);
    expect(answerText).toBeInTheDocument();
  });
});
