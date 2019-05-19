const http = require('http');

function sleep(ms) {
  // node.js >= 9.3  blocks event loop
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function createWorkers(numberOfWorkers, cluster) {
  for (let i = 1; i <= numberOfWorkers; i++) {
    cluster.fork({ workerId: i });
  }
}

function getAsync(url, onEndLogMessage) {
  http.get(url, resp => {
    let data = '';

    resp.on('data', chunk => {
      data += chunk;
    });

    resp.on('end', () => {
      console.log(
        `${onEndLogMessage} Completed on ${getCurrentFormattedDate()} with received data: ${data}.`
      );
    });
  });
}

function getCurrentFormattedDate() {
  let current_datetime = new Date();

  return (
    current_datetime.getDate() +
    '/' +
    (current_datetime.getMonth() + 1) +
    '/' +
    current_datetime.getFullYear() +
    ' ' +
    current_datetime.getHours() +
    ':' +
    current_datetime.getMinutes() +
    ':' +
    current_datetime.getSeconds()
  );
}

function appendLeadingZeroes(number) {
  if (n <= 9) {
    return '0' + n;
  }
  return n;
}

module.exports = {
  sleep: sleep,
  createWorkers: createWorkers,
  getAsync: getAsync,
  getCurrentFormattedDate: getCurrentFormattedDate
};
