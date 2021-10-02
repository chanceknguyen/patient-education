const express = require('express');

const app = express();

app.use(express.static('./client/dist'));

app.get('/i', (req, res) => {
  res.status(200).send('Hello World!');
});

module.exports = app;
