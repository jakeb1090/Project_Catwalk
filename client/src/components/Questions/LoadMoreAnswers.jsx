import React from 'react';
import axios from 'axios';
const { API_KEY } = require('../../../../config');

const LoadMoreAnswers = () => {
  const handleClick = () => {
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/';

    console.log('...loading more answers');
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
    <div className="load-more">
      <input type="button" value="load more answers" onClick={handleClick} />
    </div>
  );
};

export default LoadMoreAnswers;
