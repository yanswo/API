const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/*": "/$1",
  })
);

server.use(router);

// Usa a variável de ambiente PORT fornecida pela plataforma
const port = process.env.PORT || 3000; // A plataforma define a porta, ou 3000 como fallback
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

module.exports = server;
