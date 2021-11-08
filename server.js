const express = require('express');
const server = require('./src/app');
const app = express();
const port = 3000;

app.use('/api/', server);

app.listen(port, () => {
  console.debug(`Example app listening at http://localhost:${port}/api`);
});

module.exports = app;
