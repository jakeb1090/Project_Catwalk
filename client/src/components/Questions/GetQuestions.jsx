import React from 'react';
import axios from 'axios';

const GetQuestions = () => {
  // https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/?product_id=1

  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions';

<<<<<<< HEAD
<<<<<<< HEAD
  const handleClick = (e) => {
    const params = {
      product_id: 1,
      page: 2,
      count: 22,
=======
  const handleClick = () => {
    const params = {
      product_id: 61577,
      // page: 2,
      // count: 22,
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
=======
  const handleClick = () => {
    const params = {
      product_id: 61577,
      // page: 2,
      // count: 22,
>>>>>>> aabc142 (Added test buttons for API requests)
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
    <div className="get-question">
<<<<<<< HEAD
<<<<<<< HEAD
      <input onClick={handleClick} type="button" value="Get Questions" />
    </div>
  )
}
=======
      <input onClick={handleClick} type="button" value="Get Questions " />
    </div>
  );
};
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
=======
      <input onClick={handleClick} type="button" value="Get Questions " />
    </div>
  );
};
>>>>>>> aabc142 (Added test buttons for API requests)

export default GetQuestions;
