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
  const { id } = req.query;
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

/* eslint-disable camelcase */
app.get('/qa/questions/:id', (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const url = `${baseURL}/qa/questions/?product_id=${id}`;
  const headers = { headers: { authorization } };

  axios.get(url, headers)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

app.get('/qa/:question_id/answers', (req, res) => {
  const { question_id } = req.params;
  const { authorization } = req.headers;
  const url = `${baseURL}/qa/questions/${question_id}/answers`;
  const headers = { headers: { authorization } };

  axios.get(url, headers)
    .then((response) => {
      const { results } = response.data;
      res.status(response.status).send(results);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

// add question
app.post('/qa/questions', (req, res) => {
  const data = req.body;
  const { authorization } = req.headers;
  const url = `${baseURL}/qa/questions`;
  const headers = { authorization };

  axios.post(url, data, {headers})
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

// add answer
app.post('/qa/:question_id/answers', (req, res) => {
  const data = req.body;
  // eslint-disable-next-line camelcase
  const { question_id } = req.params;
  const { authorization } = req.headers;
  const headers = { authorization };
  // eslint-disable-next-line camelcase
  const url = `${baseURL}/qa/questions/${question_id}/answers`;

  axios.post(url, data, { headers })
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      res.status(error).send(error);
    });
});

// helpful question
app.put('/qa/question/:question_id/helpful', (req, res) => {
  const { question_id } = req.params;
  const url = `${baseURL}/qa/questions/${question_id}/helpful`;
  const { authorization } = req.headers;
  const headers = { authorization };
  axios.put(url, {}, { headers })
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      res.status(error.status).send(error);
    });
});

// helpful answer
app.put('/qa/answer/:answer_id/helpful', (req, res) => {
  const { answer_id } = req.params;
  const url = `${baseURL}/qa/answers/${answer_id}/helpful`;
  const { authorization } = req.headers;
  const headers = { authorization };

  axios.put(url, {}, { headers })
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((error) =>{
      res.send(error);
    });
});

// report answer
app.put('/qa/answer/:answer_id/report', (req, res) => {
  const { answer_id } = req.params;
  const url = `${baseURL}/qa/answers/${answer_id}/report`;
  const { authorization } = req.headers;
  const headers = { authorization };

  axios.put(url, {}, { headers })
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      res.status(error.status).send(error);
    });
});

module.exports = app;
