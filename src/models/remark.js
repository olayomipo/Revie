
const EntitySchema = require('typeorm').EntitySchema

const Remark = new EntitySchema({
    name : "Remark",
    tableName : "remarks",
    columns: {
      id : {
        primary : true,
        type : "int",
        generated : true,
      },
      user_id : {
        type: "int",
      },
      review_id : {
        type: "int",
      },
      helpful : {
        type: "boolean",
      }
    }
}) 

module.exports = Remark;
