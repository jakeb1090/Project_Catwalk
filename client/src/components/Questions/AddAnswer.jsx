<<<<<<< HEAD
import React, { useState } from 'react';
import axios from 'axios';
const qs = require('qs');
// const API_KEY = require('./api.config');

const AddAnswer = (props) => {

  // /qa/questions/:question_id/answers
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/';

  const handleClick = (e) => {
    const params = {
      body: 'how do I put thid belt on?',
      name: 'dirkdiggler137',
      email: 'dirkdiggler137@hotmail.com',
      product_id: 5,
=======
import React from 'react';
import axios from 'axios';

const qs = require('qs');
// const API_KEY = require('./api.config');

const AddAnswer = () => {
  // https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?question_id=3/answers
  // /qa/questions/:question_id/answers
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/';

  const handleClick = () => {
    const params = { question_id: 1 };

    const bodyParams = {
      body: 'Yes, these belts are 100% free-trade',
      name: 'dirkdiggler137',
      email: 'dirkdiggler137@hotmail.com',
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: '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',
    };

<<<<<<< HEAD
    const config = { params: qs.stringify(params), headers };

    axios.post(url, {}, config)
=======
    const config = { params: qs.stringify(bodyParams), headers };

    axios.post(url, params, config)
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
      .then((res) => {
        console.log(res);
      });
  };

  return (
<<<<<<< HEAD
    <div className="button">
=======
    <div className="add-answer button">
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
      <input type="button" value="Add Answer" onClick={handleClick} />
    </div>
  );
};

export default AddAnswer;
