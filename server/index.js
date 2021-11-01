const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.json());
const STATIC_DIR = path.join(__dirname, '../client/dist');
app.use(express.static(STATIC_DIR));

// paths
app.get('/products', (req, res) => {
  const { page, count } = req.query;
  const { authorization } = req.headers;
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/?page=${page}&count=${count}`;
  const headers = { headers: { authorization } };

  axios.get(url, headers)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}`;
  const headers = { headers: { authorization } };

  axios.get(url, headers)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

app.get('/products/:id/styles', (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}/styles`;
  const headers = { headers: { authorization } };

  axios.get(url, headers)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

app.get('/products/:id/related', (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}/related`;
  const headers = { headers: { authorization } };

  axios.get(url, headers)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

app.get('/reviews/meta', (req, res) => {
  const { id } = req.query;
  const { authorization } = req.headers;
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta/?product_id=${id}`;
  const headers = { headers: { authorization } };

  axios.get(url, headers)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

module.exports = app;
