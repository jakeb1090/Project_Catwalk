import axios from 'axios';
import API_KEY from '../../../config';

const API = {
  getReviews: (prodId) => {
    return axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews',
      params: {
        product_id: prodId,
        count: 5000,
      },
      headers: {
        Authorization: API_KEY,
      },
    });
  },
  getMeta: (prodId) => {
    return axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta',
      params: {
        product_id: prodId,
      },
      headers: {
        Authorization: API_KEY,
      },
    });
  },
  // post:
  // put:
};

export default API;
