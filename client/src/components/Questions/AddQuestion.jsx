/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';

const { API_KEY } = require('../../../../config');

const AddQuestion = () => {
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/';

  const handleClick = () => {
    const data = {
      body: 'are the sleeves organic free-trade?',
      name: 'jack',
      email: 'jack8482@hotmail.com',
      product_id: 61601,
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: API_KEY,
    };

    const config = { headers };

    axios.post(url, data, config)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="add-question button">
      <input type="button" value="Add A Question +" onClick={handleClick} />
    </div>
  );
};

export default AddQuestion;
