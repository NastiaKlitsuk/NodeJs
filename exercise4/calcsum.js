const utils = require('../utils');

process.on('message', numbers => {
  utils.sleep(2000);
  const { x, y } = numbers;
  const sum = x + y;
  process.send({ sum });
  console.log(`Calcsum: input x: ${x} and y: ${y}; output: ${sum}`);
});
