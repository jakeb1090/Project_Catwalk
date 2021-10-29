import React, { useState } from 'react';
import axios from 'axios';
const qs = require('qs');
// const API_KEY = require('./api.config');

const AddQuestion = (props) => {

  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/';

  const handleClick = (e) => {
    const params = {
      body: 'how do I put thid belt on?',
      name: 'dirkdiggler137',
      email: 'dirkdiggler137@hotmail.com',
      product_id: 5,
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: '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',
    };

    const config = { params: qs.stringify(params), headers };

    axios.post(url, {}, config)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="button">
      <input type="button" value="Add Question" onClick={handleClick} />
    </div>
  );
};

export default AddQuestion;
