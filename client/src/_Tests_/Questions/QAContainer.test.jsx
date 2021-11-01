import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import '@testing-library/jest-dom';
import QAContainer from '../../components/Questions/QAContainer';

describe('Question and Answer Container', () => {
  render(<QAContainer />);
  test('should display Question header', () => {
    const text = screen.getByText('Q:');
    expect(text).toBeInTheDocument();
  });
  test('should display Answer header', () => {
    const text = screen.getByText('A:');
    expect(text).toBeInTheDocument();
  });
});
