const express = require('express')
const Model = require('../models/otheroptions.js')

module.exports = function(){
  var router = express.Router();

  // router.get('/',function(req,res){
  //   res.render('main/main')
  // })

  // 返回的表级
  router.post('/returnlevel', function (req, res){
    Model.returnLevel(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)  
      }
    }) 
  })

  router.post('/coefficient', function (req, res){
    Model.getCoefficient(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)  
      }
    }) 
  })
  
  router.post('/department', function (req, res){   
    Model.getDepartment(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)
      }
      
    }) 
  })
  
  router.post('/supply', function (req, res){   
    Model.getSupply(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)  
      }
    }) 
  })

  router.post('/watermeter/meteruse', function (req, res){   
    Model.getMeterUse(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)  
      }
    }) 
  })
  
  router.post('/purpose', function (req, res){   
    Model.getPurpose(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)  
      }
    }) 
  })

  router.post('/build', function (req, res){   
    Model.getBulid(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)  
      }
    }) 
  })

  router.post('/superior', function (req, res){   
    Model.getSuperior(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)  
      }
    }) 
  })

  router.post('/school', function (req, res){   
    Model.getSchool(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)  
      }
    }) 
  })

  return router
  
}