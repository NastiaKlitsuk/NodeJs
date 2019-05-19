const utils = require('../utils');

process.on('message', numbers => {
  utils.sleep(2000);
  const { x, y } = numbers
  process.send({ sum: x + y });
  console.log(`Message from parent: `, numbers);
});

