const cluster = require('cluster');
const http = require('http');
const utils = require('../utils')

if (cluster.isMaster) {
  utils.createWorkers(4, cluster)
} else {
  http
    .Server((req, res) => {
      utils.sleep(2000);
      res.writeHead(200);
      res.end('ok\n');
      console.log(`[WORKER ${process.env.workerId}] has finished at ${utils.getCurrentFormattedDate()}`);
    })
    .listen(8000);

    console.log(`[WORKER ${process.env.workerId}] server is up...`)
}
