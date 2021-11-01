import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import '@testing-library/jest-dom';
import GetAnswers from '../../components/Questions/GetAnswers';

describe('Get Answers Button and Component', () => {
  test('should not render to Dom', () => {
    render(<GetAnswers />);
    const button = screen.getByTestId('get-answers');
    expect(button).toBeInTheDocument();
  });
});
