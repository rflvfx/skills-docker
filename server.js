const http = require('http');
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Ola do Docker!\n');
}).listen(PORT, () => console.log(`Servidor Docker em http://localhost:${PORT}`));
