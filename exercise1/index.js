const server = require('./server')
const client = require('./client')

server.initServer()
client.makeRequestsAsync(10)
