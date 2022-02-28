const express = require('express');
const morgan = require('morgan');
let indexRoutes = require('./routes/index')

let app = express()

//settings
app.set("port", process.env.PORT | 3000)
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/",indexRoutes)
app.listen(app.get("port"), ()=>{
         console.log("Server on port "+ app.get('port'));
})
