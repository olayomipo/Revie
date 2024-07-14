const EntitySchema = require('typeorm').EntitySchema

const Apartment = new EntitySchema({
    name : "Apartment",
    tableName : "apartments",
    columns: {
      id : {
        primary : true,
        type : "int",
        generated : true,
      },
      name : {
        type: "text",
      },
      address : {
        type: "text",
      },
      contact : {
        type: "text",
      },
      amenities : {
        type: "text",
      },
    }
}) 

module.exports = Apartment;
