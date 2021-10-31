import React from 'react';
import axios from 'axios';

const GetAnswers = () => {
  // https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/:question_id/answers?question_id=3
  // GET /qa/questions/:question_id/answers
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions';

<<<<<<< HEAD
  const handleClick = (e) => {
    const params = {
      product_id: 1,
=======
  const handleClick = () => {
    const params = {
      product_id: 61601,
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
      page: 2,
      count: 22,
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: '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',
    };

    const config = { params, headers };

    axios.get(url, config)
      .then((res) => {
        console.log(res);
      });
  };

  return (
<<<<<<< HEAD
    <div className="get-question">
      <input onClick={handleClick} type="button" value="Get Answers" />
    </div>
  )
}
=======
    <div className="get-answers button">
      <input onClick={handleClick} type="button" value="more answers" />
    </div>
  );
};
>>>>>>> e32449df701931fecd09323aa201dff108b30c95

export default GetAnswers;
