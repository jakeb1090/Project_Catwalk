import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  test, expect, describe, jest,
} from '@jest/globals';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AnswerElement from '../../components/Questions/AnswerElement';

describe('Individual answer elements', () => {
  const answer = {
    id: 4996635,
    body: 'Mine was delivered from Oklahoma',
    date: '2017-11-04T00:00:00.000Z',
    answerer_name: 'toofast',
    helpfulness: 14,
    photos: ['https://images-na.ssl-images-amazon.com/images/I/71S5dyn7GQL.__AC_SX300_SY300_QL70_FMwebp_.jpg'],
  };
  test('should render component to DOM', () => {
    const mockFn = jest.fn();
    render(<AnswerElement data={answer} onFetchAnswers={mockFn} />);
    const element = screen.getByTestId('answer-element');
    expect(element).toBeInTheDocument();
  });
  test('clicking "Yes Helpful" button should fire handler', () => {
    const mockFn = jest.fn();
    render(<AnswerElement data={answer} onFetchAnswers={mockFn} />);
    const element = screen.getByText(/yes/i);
    userEvent.click(element, mockFn);
    expect(mockFn).toHaveBeenCalled();
  });
});
