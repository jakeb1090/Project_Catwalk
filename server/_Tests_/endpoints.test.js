const supertest = require('supertest');
const { test, expect, describe } = require('@jest/globals');
const app = require('../index');
const API_KEY = require('../config');

const request = supertest(app);

const headers = { Authorization: API_KEY };
const id = 61576;

// --PAGINATED PRODUCTS--
describe('GET /products/?page=page&count=count', () => {
  describe('when passed no page or count', () => {
    test('response has a JSON content type', async () => {
      await request
        .get('/products')
        .set(headers)
        .then((response) => {
          expect(response.headers['content-type']).toEqual('application/json; charset=utf-8');
        });
    });
    test('response status is 200', async () => {
      await request
        .get('/products')
        .set(headers)
        .then((response) => {
          expect(response.status).toBe(200);
        });
    });
    test('should return the correct count', async () => {
      await request
        .get('/products/?page=1&count=10')
        .set(headers)
        .then((response) => {
          expect(response.body).toHaveLength(10);
        });
    });
  });
});

// --PRODUCTS--
describe('GET /products/id', () => {
  describe('when passed no id', () => {
    test('response status is 200', async () => {
      await request
        .get('/products')
        .set(headers)
        .then((response) => {
          expect(response.status).toBe(200);
        });
    });
    test('response has a JSON content type', async () => {
      await request
        .get('/products')
        .set(headers)
        .then((response) => {
          expect(response.status).toBe(200);
          expect(response.headers['content-type']).toEqual('application/json; charset=utf-8');
        });
    });
  });

  describe('when passed an id that doesn\'t exist', () => {
    test('should return status of 404', async () => {
      await request
        .get('/products/1')
        .set(headers)
        .then((response) => {
          expect(response.status).toBe(404);
        });
    });
  });

  describe('when passed a valid id', () => {
    test('should respond with 200 status code', async () => {
      await request
        .get(`/products/${id}`)
        .set(headers)
        .then((response) => {
          expect(response.status).toBe(200);
        });
    });
  });
});

// --STYLES--
describe('GET /products/id/styles', () => {
  describe('when passed a valid id', () => {
    test('should respond with 200 status code', async () => {
      await request
        .get(`/products/${id}/styles`)
        .set(headers)
        .then((response) => {
          expect(response.status).toBe(200);
        });
    });
  });

  describe('when passed an id that doesn\'t exist', () => {
    test('should return status of 404', async () => {
      await request
        .get('/products/1')
        .set(headers)
        .then((response) => {
          expect(response.status).toBe(404);
        });
    });
  });
});

// --RELATED--
describe('GET /products/id/related', () => {
  describe('when passed a valid id', () => {
    test('should respond with 200 status code', async () => {
      await request
        .get(`/products/${id}/related`)
        .set(headers)
        .then((response) => {
          expect(response.status).toBe(200);
        });
    });
  });

  describe('when passed an id that doesn\'t exist', () => {
    test('should return status of 404', async () => {
      await request
        .get('/products/1')
        .set(headers)
        .then((response) => {
          expect(response.status).toBe(404);
        });
    });
  });
});
