import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import '@testing-library/jest-dom';
import AnswerElement from '../../components/Questions/AnswerElement';

describe('Individual answer elements', () => {
  test('should render component to DOM', () => {
    render(<AnswerElement />);
    const element = screen.getByTestId('answer-element');
    expect(element).toBeInDocument();
  });
});
