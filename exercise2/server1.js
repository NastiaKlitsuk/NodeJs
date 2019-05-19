const http = require('http');
const utils = require('../utils')

http
  .Server((req, res) => {
    utils.sleep(2000);
    res.writeHead(200);
    res.end('ok\n');
    console.log(`Request process ended at ${new Date()}`)
  })
  .listen(8001);
console.log('Server is up.');
