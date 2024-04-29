const express = require("express")
const helmet  = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const app = express();


// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
// app.use(morgan("combined"))
// morgan("combined")
// morgan("common")
// morgan("short")
// morgan("tiny")`


// init db 
require('./dbs/init.mongodb')
const {countConnect} = require('./helps/check.connect')
// init routes 
app.get("/", (req,res) => {
  return res.status(200).json({
    message: "welcome",
    
  })
})

// handling error

module.exports = app