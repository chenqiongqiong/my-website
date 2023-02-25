const http = require('node:http');
const { exec } = require('node:child_process');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  exec('git pull');
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
});

server.listen(8000);