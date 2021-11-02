import axios from 'axios';
import TOKEN from './ignore';

const API = {
  getReviews: (prodId, callback) => {
    axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews',
      params: {
        product_id: prodId,
        count: 5000
      },
      headers: {
        'Authorization': TOKEN
      }
    })
      .then((result) => {
        callback(null, result)
      })
      .catch((err) => {
        callback(err, null)
      })
  },
  getMeta: (prodId, callback) => {
    axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta',
      params: {
        product_id: prodId
      },
      headers: {
        'Authorization': TOKEN
      }
    })
      .then((result) => {
        callback(null, result);
      })
      .catch((err) => {
        callback(err, null);
      })
  }
  // post:
  // put:
};

export default API;