const server = require('./server')
const client = require('./client')

server.initServer()
client.makeRequestsAsync(10)

// Answers:
// 1) The requests are processed sequentially.
// 2) The client call completion callbacks executed after the execution of all the 10 client requests
//  2.1) At around the same time occur 2 callbacks.