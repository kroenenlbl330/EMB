const express = require('express')
const Model = require('../models/otheroptions.js')

module.exports = function(){
  var router = express.Router();

  router.get('/',function(req,res){
    res.render('main/main')
  })

  router.post('/watermeter/select/watermeterlevel', function (req, res){
    Model.selectWaterMeterLevel(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)  
      }
    }) 
  })

  router.post('/watermeter/coefficient', function (req, res){
    Model.getCoefficient(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)  
      }
    }) 
  })
  
  router.post('/watermeter/pipediameter', function (req, res){   
    Model.getPipeDiameter(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)  
      }
    }) 
  })
  
  router.post('/watermeter/powertype', function (req, res){   
    Model.getPowerType(req, res, function (err, result) {
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
  
  router.post('/watermeter/subordinatedepartments', function (req, res){   
    Model.getSubordinateDepartments(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)  
      }
    }) 
  })

  return router
  
}