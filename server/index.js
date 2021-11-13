const compression = require('compression');
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
app.use(compression());
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
// get questions
app.get('/qa/questions/:id', (req, res) => {
  const { id } = req.params;
  const { count } = req.query;
  const { authorization } = req.headers;
  const url = `${baseURL}/qa/questions/?product_id=${id}`;
  const headers = { params: { count }, headers: { authorization } };

  axios.get(url, headers)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
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

app.post('/qa/questions', (req, res) => {
  const { payload } = req.body;
  const { Authorization } = req.headers;
  const url = `${baseURL}/qa/questions`;
  const headers = { headers: { Authorization } };

  axios({
    method: 'post',
    url,
    data: payload,
    headers,
  })
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post('/qa/:question_id/answers', (req, res) => {
  const data = req.body;
  // eslint-disable-next-line camelcase
  const { question_id } = req.params;
  const { authorization } = req.headers;
  const headers = { authorization };
  // eslint-disable-next-line camelcase
  const url = `${baseURL}/qa/questions/${question_id}/answers`;

  axios.post(url, { data }, { headers })
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      res.status(error).send(error);
    });
});

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  const { question_id } = req.params;
  const url = `${baseURL}/qa/questions/${question_id}/helpful`;
  const { authorization } = req.headers;
  const headers = { headers: { authorization } };

  axios.put(url, headers)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  const { answer_id } = req.params;
  const url = `${baseURL}/qa/answers/${answer_id}/helpful`;
  const { authorization } = req.headers;
  const headers = { headers: { authorization } };

  axios.put(url, headers)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.put('/qa/questions/:question_id/report', (req, res) => {
  const { question_id } = req.params;
  const url = `${baseURL}/qa/questions/${question_id}/report`;
  const { authorization } = req.headers;
  const headers = { authorization };
  console.log(url);
  axios.put(url, { headers })
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((error) => {
      res.status(error.status).send(error);
    });
});

app.put('/qa/answers/:answer_id/report', (req, res) => {
  const { answer_id } = req.params;
  const url = `${baseURL}/qa/answers/${answer_id}/report`;
  const { authorization } = req.headers;
  const headers = { header: authorization };

  axios.put(url, headers)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = app;
