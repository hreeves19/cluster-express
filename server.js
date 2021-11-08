const express = require('express');
const server = require('./src/app');
const cluster = require('cluster');
const totalCPUs = require('os').cpus().length;
const port = 3000;
let app;

if (cluster.isMaster) {
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });
} else {
  const app = express();

  console.log(`Worker ${process.pid} started`);

  app.use('/api', server);

  app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}/api`);
  });
}

module.exports = app;
