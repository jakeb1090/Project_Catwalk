import React from 'react';
import axios from 'axios';

const { API_KEY } = require('../../../config');

// const API_KEY = require('./api.config');

const AddAnswer = () => {
  // https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?question_id=3/answers
  // /qa/questions/:question_id/answers
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/';

  const handleClick = () => {
    // const params = { question_id: 1 };

    const params = {
      body: 'Yes, these belts are 100% free-trade',
      name: 'dirkdiggler137',
      email: 'dirkdiggler137@hotmail.com',
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: API_KEY,
    };

    const config = { headers };

    axios.post(url, params, config)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div data-testid="add-answer" className="add-answer button">
      <input type="button" value="Add Answer" onClick={handleClick} />
    </div>
  );
};

export default AddAnswer;