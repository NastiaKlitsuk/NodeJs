const utils = require('../utils');

for (let i = 0; i < 10; i++) {
  utils.getAsync(
    'http://localhost:8000',
    `Client call number ${i} completed.`
  );
}
