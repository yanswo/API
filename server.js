const jsonServer = require("json-server");
const cors = require("cors"); // Importando o CORS
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

// Usando CORS para permitir requisições de outros domínios
server.use(cors());

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/*": "/$1", // Reescrevendo a URL para o formato correto
  })
);

server.use(router);

// Usa a variável de ambiente PORT fornecida pela plataforma ou 3000 como fallback
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

module.exports = server;
