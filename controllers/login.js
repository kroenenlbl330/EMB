const express = require('express')
const Model = require('../models/login.js')

module.exports = function(){
  var router = express.Router()

  router.post('/backstage',function(req,res){
    var password = req.body.password

    Model.getUsers(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        if(result.length == 0){
          res.status(400).send('no this admin').end()
        }else{  
          if(result[0].password == password){
            //成功
            req.session['admin_id'] = result[0].id
            res.render('main/main')
          }else{
            res.status(404).send('this passwrd is incorret').end()
          }                  
        }
      }
    }) 


    // if(username == "admin" || passwrd == "admin"){
    //   req.session['admin_id'] = "k1"
    //   res.render('main/main')
    // }else{
    //   res.status(404).send('this passwrd is incorret').end()
    // }
  })

  return router
}