const http = require('http');

for (let i = 0; i < 10; i++) {
    http.get('http://localhost:8000', resp => {
      let data = '';

      resp.on('data', (chunk) => {
          data += chunk;
      });
  
      resp.on('end', () => {
        console.log(`Client call number ${i} completed with data: ${data}.`);
      });
    });
  }