module.exports =async function () {
  try {
    let db = await require("../libs/dbConnection.js")()
    let {Schema} = require('mongoose')
    console.log(db)
    var things = new Schema({
      name:String,
      size:Number,
      status:Boolean
    })

    return db.model('things', things)
  } catch (e) {
     console.log(e);
  }

};
