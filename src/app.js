const express = require('express');
const app = express();

app.post('/', (req, res) => {
  res.json([{ hello: [1, 2, 3, 4] }]);
});

app.get('/:n', (req, res) => {
  let n = parseInt(req.params.n);
  let count = 0;

  if (n > 5000000000) n = 5000000000;

  for (let i = 0; i <= n; i++) {
    count += i;
  }

  res.send(`Final count is ${count}`);
});

module.exports = app;
