const express = require('express');
const router = express.Router()
var thing={} ;
require('../models/index')().then(t=>{
    thing = t
})

router.get("/",(req,res)=>{
	res.send("<h3>See this routes<h3> /things")
})

router.get("/things",async (req,res)=>{

    thing.find({}, (err,data)=>{

      return res.json(data)
      console.log(err);

     })

})

router.post("/things", async (req,res)=>{
   try {
     console.log(req.body, typeof req.body);
		 thing.create(req.body, (err,data)=>{
       if (data) {
       	return res.json({msg:"successfully post"})
       }
			 console.log(err);

			 return res.json({msg:"error"})


      })
   } catch (e) {
       console.log(e);
   }
})
module.exports = router
