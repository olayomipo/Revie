const { createConnection } = require("typeorm");
const port = require("./config");
const app = require("./app");


const PORT = port || 3030;

createConnection().then(async connection => {
  app.listen(PORT);
  console.log(`Express server has started on port ${PORT}.`);
}).catch(error => console.log(error));
