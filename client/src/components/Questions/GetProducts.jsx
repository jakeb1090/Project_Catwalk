import React from 'react';
import axios from 'axios';

const { API_KEY } = require('../../../../config');

const GetProducts = () => {
  // https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products?count=22

  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products';

  const handleClick = () => {
    const params = {
      product_id: 1,
      page: 2,
      count: 14,
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: API_KEY,
    };

    axios.get(url, { params, headers })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div data-testid="get-products button" className="get-products button">
      <input onClick={handleClick} type="button" value="Get Products" />
    </div>
  );
};

export default GetProducts;
