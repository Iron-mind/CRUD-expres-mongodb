const express = require('express');
const router = express.Router()


router.get("/",async (req,res)=>{
	const model = await require('../models/index')()
	console.log("model sss",model)
    model.find({}, (err,data)=>{
    
      return res.json(data)
      console.log(err);
    
     })
  
})

module.exports = router
