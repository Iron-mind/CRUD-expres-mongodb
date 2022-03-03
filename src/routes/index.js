const express = require('express');
const router = express.Router()
var thing={} ;
require('../models/index')().then(t=>{
    thing = t
})
//crud baby

router.get("/",(req,res)=>{
	res.send("<h3>See this route<h3> /things")
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

router.put("/things", (req,res)=>{
  let {_id}= req.body
  thing.updateOne({_id:_id},req.body, (err,data)=>{
    if (data) {
      return res.json({msg:'successfully'})

    }
    console.log(err);
  })
})
router.delete("/things/:id", (req,res)=>{
  let {id}= req.params
  thing.deleteOne({_id:id},(err,data)=>{
    if (data) {
      return res.json({msg:'successfully'})

    }
    console.log(err);
  })
})
module.exports = router
