const http = require('http');
const fs = require('fs');
const port = 8085;

http.createServer((req, res) => {
  if (req.url === '/unos') {
    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        console.log(body);
        res.end();
      });
    } else {
      fs.readFile('forma.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
    }
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('404 Not Found');
    res.end();
  }
}).listen(port);

console.log(`Server listening on port ${port}`);
