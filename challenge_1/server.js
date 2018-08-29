const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const middlewares = jsonServer.defaults();
const port = 3000 || process.env.PORT;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on ${port}`);
});
