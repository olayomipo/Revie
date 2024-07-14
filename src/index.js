const { createConnection } = require("typeorm");
const port = require("./config");
const app = require("./app");

createConnection().then(async connection => {
  app.listen(port);
  console.log(`Express server has started on port ${port}.`);
}).catch(error => console.log(error));
