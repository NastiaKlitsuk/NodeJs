const http = require('http');

function makeRequestsAsync(numberOfRequests) {
  for (let i = 0; i < numberOfRequests; i++) {
    http.get('http://localhost:8001', resp => {
      let data = '';

      resp.on('data', (chunk) => {
          data += chunk;
      });
  
      resp.on('end', () => {
        console.log(`Client call number ${i} completed with data: ${data}. ${Date.now()}`);
      });
    });
  }
}

module.exports = {
  makeRequestsAsync: makeRequestsAsync
};
