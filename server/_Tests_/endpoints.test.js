const supertest = require('supertest');
const app = require('../index');
const API_KEY = require('./config');
// const {it, expect } = require('@jest/globals');
const request = supertest(app);

const headers = { Authorization: API_KEY };
const id = 61576;

it('gets the product endpoint', async () => {
  await request
    .get(`/products/${id}`)
    .set(headers)
    .then((response) => {
      expect(response.status).toBe(200);
    });
});

// const getProductStyles = (id, cb) => {
//   axios.get(`/products/${id}/styles`, headers)
//     .then((response) => { cb(null, response.data); })
//     .catch((err) => { cb(err); });
// };

// const getProductRelated = (id, cb) => {
//   axios.get(`/products/${id}/related`, headers)
//     .then((response) => { cb(null, response.data); })
//     .catch((err) => { cb(err); });
// };

// const getReviewsMeta = (id, cb) => {
//   axios.get(`/reviews/meta/?id=${id}`, headers)
//     .then((response) => { cb(null, response.data); })
//     .catch((err) => { cb(err); });
// };
