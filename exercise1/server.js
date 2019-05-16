const http = require('http');

function sleep(ms) { // node.js >= 9.3  blocks event loop
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function init() {
  http
    .Server((req, res) => {
      sleep(2000);
      res.writeHead(200);
      res.end('ok\n');
    })
    .listen(8001);
  console.log('Server is up.');
}

module.exports = {
  initServer: init
};
