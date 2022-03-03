const express = require('express');
const Authroute = express.Router();
require('dotenv').config()
const jwt = require('jsonwebtoken')

Authroute.post('/api/v1/register', async(req, res) => {
      console.log(req.body)
      console.log(req)
     if(!req.body.username && !req.body.password){
           res.sendStatus(401)
     }
     const token = jwt.sign({username: req.body.username, password: req.body.password},process.env.SECRATE_KEY_VALUE)
      res.send(token)
})

 function authenticate(req, res,next) {
      const auth = req.headers('authorization');
      const token = auth && auth.split(' ')[1]
      jwt.verify(token, process.env.SECRATE_KEY_VALUE,(err, res) => {
            if (err) {
                  res.sendStatus(403)
            }
            console.log(res)
            req.user = res
      })
 }

Authroute.post('/api/v1/login', async(req, res) => {
      const token= req.body.token
      jwt.verify(token, process.env.SECRATE_KEY_VALUE,(err, data) => {
          res.send(data)
      })
})



module.exports=Authroute;
