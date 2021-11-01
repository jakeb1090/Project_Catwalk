import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import '@testing-library/jest-dom';
import QAContainer from '../../components/Questions/QAContainer';

describe('Question and Answer Container', () => {
  render(<QAContainer />);
  test('should display Question header', () => {
    const text = screen.queryByText(/Q:/i);
    expect(text).toBeInTheDocument();
  });
  test('should display Answer header', () => {
    const text = screen.queryByText(/A:/i, { exact: false });
    expect(text).toBeInTheDocument();
  });
});
