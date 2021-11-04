import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from '@jest/globals';
import '@testing-library/jest-dom';
import QuestionsList from '../../components/Questions/QuestionsList';

describe('Question List for indivdual product', () => {
  const questions = {
    "question_id": 533233,
    "question_body": "Where does this product ship from?",
    "question_date": "2017-11-04T00:00:00.000Z",
    "asker_name": "toofast",
    "question_helpfulness": 17,
    "reported": false,
    "answers": {
      "4996635": {
        "id": 4996635,
        "body": "Mine was delivered from Oklahoma",
        "date": "2017-11-04T00:00:00.000Z",
        "answerer_name": "toofast",
        "helpfulness": 14,
        "photos": "[]"
      },
      "4996646": {
        "id": 4996646,
        "body": "It ships from the facility in Tulsa",
        "date": "2017-11-04T00:00:00.000Z",
        "answerer_name": "toofast",
        "helpfulness": 19,
        "photos": "[]"
      }
    }
  }

  const searchText = 'sample_question';
  render(<QuestionsList questionList={questions} currentSearch={searchText} />);
  test('should render element to the DOM', () => {
    const listElement = screen.getByTestId('questions-list');
    expect(listElement).toBeInTheDocument();
  });
});
