const express = require('express');
const path = require('path');
const axios = require('axios');
// const TOKEN = require('./ignore');
// const API = require('../client/src/components/Reviews/APIcalls');

const app = express();

const PORT = 3000;

app.use(express.json());
const STATIC_DIR = path.join(__dirname, '../client/dist');
app.use(express.static(STATIC_DIR));

const API = {
  getReviews: () => {axios({
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews',
    params: {
      product_id: 61590,
    },
    headers: {
      'Authorization': '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'
    }
  })
  .then((result) => {
    console.log(result.data.results.length, " reviws were fetched via index.js");
  })
  .catch((err) => console.log(err))
}
  ,
  // getMeta: axios({
  //   method: 'get',
  //   url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta',
  //   params: {
  //     product_id: 61590
  //   },
  //   headers: {
  //     'Authorization': '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'
  //   }
  // })
  // .then ((result) => {
  //   console.log('getMeta',result.data);
  // })
  // .catch((err) => console.log(err))
  // post:
  // put:
};
//Annie's API requests:
app.get('/reviews', (req, res) => {
  API.getReviews();
});

app.listen(PORT, () => { console.log(`listening on http://localhost:${PORT}`); });


