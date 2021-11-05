import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import AnswerElement from './AnswerElement';

const AnswerInnerList = (props) => {
  const [answerArray, setAnswerArray] = useState([]);
  const { answers, answersN, currentProduct } = props;
  const keys = Object.keys(answers);

  const fetchAnswers = (productId) => {
    const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';
    const params = {
      count: 5,
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: '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',
    };
    axios.get(`${baseURL}/qa/questions/${productId}/answers`, { headers })
      .then((res) => {
        setAnswerArray(res.data.results);
      });
  };

  // useEffect(() => {
  //   fetchAnswers(currentProduct);
  // });

  return (
    <div data-testid="answer-inner-list" className="answer-inner-list">
      A:
      {
        answersN !== null
          ? keys.slice(0, answersN).map((key) => <AnswerElement key={key} data={answers[key]} />)
          : keys.map((key) => <AnswerElement key={key} data={answers[key]} />)
      }
    </div>
  );
};

AnswerInnerList.defaultProps = {
  answers: {},
  answersN: null,
};

AnswerInnerList.propTypes = {
  answers: PropTypes.objectOf(PropTypes.object),
  answersN: PropTypes.number,
};

export default AnswerInnerList;
