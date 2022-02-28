module.exports =async function () {
  try {
    let db = await require("../libs/dbConnection.js")()
    let {Schema} = require('mongoose')
    console.log(db.model)
    var things = new Schema({
      name:String,
      size:Number,
      status:Boolean
    })
     
    let mongoose = require("mongoose")
    return  db.model('things', things)
  } catch (e) {
     console.log(e);
  }

};
