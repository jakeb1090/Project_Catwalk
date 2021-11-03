import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import '@testing-library/jest-dom';
import AnswerInnerList from '../../components/Questions/AnswerInnerList';

describe('Answer List container per question', () => {
  test('should render list component', () => {
    render(<AnswerInnerList />);
    const listElement = screen.getByTestId('answer-inner-list');
    expect(listElement).toBeInTheDocument();
  });
});
