import React from 'react';
import axios from 'axios';

const { API_KEY } = require('../../../config');

const GetAnswers = () => {
  // https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/:question_id/answers?question_id=3
  // GET /qa/questions/:question_id/answers
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/';

  const handleClick = () => {
    const params = {
      product_id: 61601,
      page: 2,
      count: 22,
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: API_KEY,
    };

    const config = { params, headers };

    axios.get(url, config)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div data-testid="get-answers" className="get-answers button">
      <input onClick={handleClick} type="button" value="more answers" />
    </div>
  );
};

export default GetAnswers;
