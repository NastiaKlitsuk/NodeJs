const http = require('http');
const utils = require('../utils');
const cluster = require('cluster');
const child_process = require('child_process');

if (cluster.isMaster) {
  utils.createWorkers(4, cluster);
} else {
  http
    .Server((req, res) => {
      console.log(`[WORKER ${process.env.workerId}] processing...`);
   
      let calcSumProcess = child_process.fork('./calcsum.js');
      let x = Math.floor(Math.random() * 100);
      let y = Math.floor(Math.random() * 100);
      calcSumProcess.send({ x, y });

      calcSumProcess.on('message', calcSumResult => {
        res.writeHead(200);
        res.end(`${calcSumResult.sum}\n`);
      });
    })
    .listen(8000);

  console.log(`[WORKER ${process.env.workerId}] server is up...`);
}
