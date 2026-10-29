const http = require('http');
http.createServer((req, res) => {
  res.end('Olá da minha imagem Docker! 🐳');
}).listen(3000, () => console.log('Rodando na porta 3000'));