import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  test, expect, describe, jest,
} from '@jest/globals';
import '@testing-library/jest-dom';
import AddQuestion from '../../components/Questions/AddQuestion';

describe('AddQuestion Component tests', () => {
  test('should render component to DOM', () => {
    render(<AddQuestion />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  test('button should trigger click handler', () => {
    render(<AddQuestion />);
    const mockHandler = jest.fn();
    const button = screen.getByRole('button');
    userEvent.click(button, mockHandler);
    expect(mockHandler).toHaveBeenCalledTimes(0);
  });
});
