import React from 'react';
import axios from 'axios';
const { API_KEY } = require('../../../../config');

const GetQuestions = () => {
  // https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/?product_id=1

  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions';

  const handleClick = () => {
    const params = {
      product_id: 61577,
      // page: 2,
      // count: 22,
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
    <div className="get-question">
      <input onClick={handleClick} type="button" value="Get Questions " />
    </div>
  );
};

export default GetQuestions;
