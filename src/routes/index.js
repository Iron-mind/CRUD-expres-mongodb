const express = require('express');
const router = express.Router()
const model = require('../models/index')()

router.get("/",(req,res)=>{
  model.find({}, (err,data)=>{
    if (!err) {
      res.json(data)
    }else {
      res.json("error del bueno")
      console.log(err);
    }
  })
  res.send('hi, boomer')
})

module.exports = router
