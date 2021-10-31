import React from 'react';
import axios from 'axios';

const GetProducts = () => {
  // https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products?count=22

  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products';

<<<<<<< HEAD
  const handleClick = (e) => {
=======
  const handleClick = () => {
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
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

export default GetProducts;
