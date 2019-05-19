const utils = require('../utils');

function makeRequestsAsync(numberOfRequests) {
  for (let i = 0; i < numberOfRequests; i++) {
    utils.getAsync(
      'http://localhost:8001',
      `Client call number ${i} completed.`
    );
  }
}

module.exports = {
  makeRequestsAsync: makeRequestsAsync
};
