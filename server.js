const http = require("http")
const port = 3000;

const rotas = {
  '/': 'Curso de node',
  '/livros': 'pagina de livros',
  '/autores': 'listagem de autores',
  '/editora': 'pagina de editora',
  '/sobre': 'Sobre isso',
}


const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end(rotas[req.url])
})

server.listen(port, () => {
  console.log (`Servidor na porta http://localhost:${port}`)
})