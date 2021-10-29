const express = require('express');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = 3000;

app.use(express.json());
const STATIC_DIR = path.join(__dirname, '../client/dist');
app.use(express.static(STATIC_DIR));

app.listen(PORT, () => { console.log(`listening on http://localhost:${PORT}`); });
