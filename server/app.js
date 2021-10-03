const express = require('express');

const app = express();

let user = {
  name: "John",
  credits: 10
};

app.use(express.static('./client/dist'));
app.use(express.json());

app.get('/i', (req, res) => {
  res.status(200).send('Hello World!');
});

app.get('/user', (req, res) => {
  res.send(user);
})

app.patch('/creditsAdd/:amount', (req, res) => {
  user.credits += Number(req.params.amount);
  res.send(user);
})

app.patch('/creditsRemove/:amount', (req, res) => {
  user.credits -= Number(req.params.amount);
  res.send(user);
})

module.exports = app;
