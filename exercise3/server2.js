const cluster = require('cluster');
const http = require('http');

function sleep(ms) {
  // node.js >= 9.3  blocks event loop
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

if (cluster.isMaster) {
  for (let i = 1; i <= 4; i++) {
    cluster.fork({ workerId: i });
  }
} else {
  http
    .Server((req, res) => {
      sleep(2000);
      res.writeHead(200);
      res.end('ok\n');
      console.log(`[WORKER ${process.env.workerId}] has finished at ${new Date()}`);
    })
    .listen(8000);

    console.log(`[WORKER ${process.env.workerId}] server is up...`)
}
