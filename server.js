const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Ola do Docker!\n');
}).listen(3000, () => console.log('Servidor rodando na porta 3000'));
