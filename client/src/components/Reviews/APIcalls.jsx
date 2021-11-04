import axios from 'axios';
import API_KEY from '../../../config';

const API = {
  getReviews: (prodId, sort) => {
    return axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews',
      params: {
        product_id: prodId,
        count: 5000,
        sort: sort
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
  post: (review) => {
    return axios({
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews',
      headers: {
        Authorization: API_KEY,
        // ContentType: 'application/json'
      },
      data: JSON.stringify(review)
    })
  },
  put: (action, review_id) => {
    return axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/:review_id/${action}`,
      params: {
        review_id: review_id,
      },
      headers: {
        Authorization: API_KEY,
      },
    })
  },
};

export default API;
