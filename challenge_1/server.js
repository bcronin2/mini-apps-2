const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./data/db-with-id.json");
const middlewares = jsonServer.defaults();
const port = 3000 || process.env.PORT;

server.use(router);
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.listen(port, () => {
  console.log(`JSON Server is running on ${port}`);
});
