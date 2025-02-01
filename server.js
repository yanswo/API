const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Configuração para a variável de ambiente PORT
const port = process.env.PORT || 3000;

server.use(middlewares);

// Roteamento
server.use(
  jsonServer.rewriter({
    "/*": "/$1", // Garantir que a API seja reescrita corretamente
  })
);

// Uso do router com o db.json
server.use(router);

// Configuração da porta para o servidor, o Render deve passar o port via process.env.PORT
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

module.exports = server;
