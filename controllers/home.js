const express = require('express')

module.exports = function(){
  var router = express.Router();

  router.get('/',function(req,res){
    res.render('home/home')
  })

  // router.post('/watermeter',function(req,res){
  //   var username = req.body.username

  //   if(username == "admin"){
  //     res.render('main/main')
  //     // res.redirect('main/main')
  //   }else{
  //     res.status(404).send('this passwrd is incorret').end();
  //   }
  // })

  router.get('/map',function(req,res){
      res.render('school/school')
  })

  router.get('/backstage',function(req,res){
    if(req.session['admin_id']){
      res.render('main/main')
    }else{
      res.render('login/login')
    }     
  })

  return router
}