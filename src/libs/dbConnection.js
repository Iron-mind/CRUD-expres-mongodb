const mongoose = require('mongoose');
var db


module.exports = function Connection() {
   if(!db){
     try {
       db= mongoose.connect("mongodb://localhost:27017/initcrud",
     {
       useMongoClient:true
     })

     } catch (e) {
       console.log(e);

   }
   return db
}
}
