<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
=======
/* eslint-disable no-console */
import React from 'react';
>>>>>>> aabc142 (Added test buttons for API requests)
import axios from 'axios';

// const API_KEY = require('./api.config');

const AddQuestion = () => {
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/';

<<<<<<< HEAD
  const handleClick = (e) => {
    const params = {
      body: 'how do I put thid belt on?',
      name: 'dirkdiggler137',
      email: 'dirkdiggler137@hotmail.com',
      product_id: 5,
=======
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';

// const API_KEY = require('./api.config');

const AddQuestion = () => {
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/';

=======
>>>>>>> aabc142 (Added test buttons for API requests)
  const handleClick = () => {
    const data = {
      body: 'are the sleeves organic free-trade?',
      name: 'jack',
      email: 'jack8482@hotmail.com',
      product_id: 61601,
<<<<<<< HEAD
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
=======
>>>>>>> aabc142 (Added test buttons for API requests)
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: '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',
    };

<<<<<<< HEAD
<<<<<<< HEAD
    const config = { params: qs.stringify(params), headers };

    axios.post(url, {}, config)
=======
    const config = { headers };

    axios.post(url, data, config)
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
=======
    const config = { headers };

    axios.post(url, data, config)
>>>>>>> aabc142 (Added test buttons for API requests)
      .then((res) => {
        console.log(res);
      });
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="button">
      <input type="button" value="Add Question" onClick={handleClick} />
=======
    <div className="add-question button">
      <input type="button" value="Add A Question +" onClick={handleClick} />
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
=======
    <div className="add-question button">
      <input type="button" value="Add A Question +" onClick={handleClick} />
>>>>>>> aabc142 (Added test buttons for API requests)
    </div>
  );
};

export default AddQuestion;
