
const EntitySchema = require('typeorm').EntitySchema

const User = new EntitySchema({
    name : "User",
    tableName : "users",
    columns: {
      id : {
        primary : true,
        type : "int",
        generated : true,
      },
      username : {
        type: "text",
      },
      email : {
        type: "text",
      },
      password : {
        type: "text",
      },
    }
}) 

module.exports = User;
