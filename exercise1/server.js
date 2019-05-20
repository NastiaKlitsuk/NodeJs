const http = require('http');
const utils = require('../utils')

function init() {
  http
    .Server((req, res) => {
      utils.sleep(2000);
      res.writeHead(200);
      res.end('ok\n');
      console.log(
        `Server response processing completed on ${utils.getCurrentFormattedDate()}.`
      );
    })
    .listen(8001);
  console.log('Server is up.');
}

module.exports = {
  initServer: init
};
