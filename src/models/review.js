const EntitySchema = require('typeorm').EntitySchema

const Review = new EntitySchema({
    name : "Review",
    tableName : "reviews",
    columns: {
      id : {
        primary : true,
        type : "int",
        generated : true,
      },
      user_id : {
        type: "int",
      },
      apartment_id : {
        type: "int",
      },
      rating : {
        type: "int",
      },
      comment : {
        type: "text",
      },
      media_url : {
        type: "text",
      }
    }
}) 

module.exports = Review;
