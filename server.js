const http = require('node:http');
const { exec } = require('node:child_process');

// Create a local server to receive data from
11const server = http.createServer((req, res) => {
  22res.writeHead(20770, { 'Content-Type': 'application/json' });
  exec('git pull');
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
});

server.listen(8000);
