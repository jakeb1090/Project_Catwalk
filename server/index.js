const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const STATIC_DIR = path.join(__dirname, '../client/dist');
app.use(express.static(STATIC_DIR));

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

// paths
app.get('/products', (req, res) => {
  const { page, count } = req.query;
  const { authorization } = req.headers;
  const url = `${baseURL}/products/?page=${page}&count=${count}`;
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
  const url = `${baseURL}/products/${id}`;
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
  const url = `${baseURL}/products/${id}/styles`;
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
  const url = `${baseURL}/products/${id}/related`;
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
  const { id } = req.params;
  const { authorization } = req.headers;
  const url = `${baseURL}/reviews/meta/?product_id=${id}`;
  const headers = { headers: { authorization } };

  axios.get(url, headers)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

app.get('/products/questions', (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const url = `${baseURL}/qa/questions/?product_id=${61601}`;
  const headers = { headers: { authorization } };

  axios.get(url, headers)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

app.get('/products/questions/answers', (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  // const url = `${baseURL}/qa/questions/?product_id=${id}`;
  const url = `${baseURL}/qa/questions/${61601}/answers`;
  const headers = { headers: { authorization } };

  axios.get(url, headers)
    .then((response) => {
      res.status(response.status).send(req.query);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

module.exports = app;
