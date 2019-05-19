const http = require('http');
const utils = require('../utils')

function init() {
  http
    .Server((req, res) => {
      utils.sleep(2000);
      res.writeHead(200);
      res.end('ok\n');
    })
    .listen(8001);
  console.log('Server is up.');
}

module.exports = {
  initServer: init
};
