const express = require('express')
const app = express()
const port = 5000
require('dotenv').config()
const mongoose = require('mongoose')
const useRouter = require('./Router/book')
 const Auth = require('./Router/jwtauth')
const cors = require("cors")
const DB = process.env.DB;

app.use(express.json())

app.use(cors())

app.use("/", useRouter);
app.use("/", Auth);

app.get("/",(req,res) =>{
   res.send("welcome to our server")
});


  mongoose.connect(DB).then(() =>{
    console.log("connected to database successfully")
  }).catch(err => console.log(err))
 

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)}
)

 

