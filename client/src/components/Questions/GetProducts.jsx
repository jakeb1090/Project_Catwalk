import React from 'react';
import axios from 'axios';

const GetProducts = () => {
  // https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products?count=22

  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products';

<<<<<<< HEAD
<<<<<<< HEAD
  const handleClick = (e) => {
=======
  const handleClick = () => {
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
=======
  const handleClick = () => {
>>>>>>> aabc142 (Added test buttons for API requests)
    const params = {
      product_id: 1,
      page: 2,
      count: 14,
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: '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',
    };

    axios.get(url, { params, headers })
      .then((res) => {
        console.log(res);
      });
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="get-question">
      <input onClick={handleClick} type="button" value="Get Products" />
    </div>
  )
}
=======
    <div className="get-question button">
      <input onClick={handleClick} type="button" value="Get Products" />
    </div>
  );
};
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
=======
    <div className="get-question button">
      <input onClick={handleClick} type="button" value="Get Products" />
    </div>
  );
};
>>>>>>> aabc142 (Added test buttons for API requests)

export default GetProducts;
