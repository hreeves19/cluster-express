const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  res.json([{ hello: [1, 2, 3, 4] }]);
});

module.exports = app;
