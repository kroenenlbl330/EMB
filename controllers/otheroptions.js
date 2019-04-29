const express = require('express')
const Model = require('../models/otheroptions.js')

module.exports = function(){
  var router = express.Router();

  // router.get('/',function(req,res){
  //   res.render('main/main')
  // })

  router.post('/watermeter/select/watermeterlevel', function (req, res){
    Model.selectWaterMeterLevel(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)  
      }
    }) 
  })

  router.post('/watermeter/getcoefficient', function (req, res){
    Model.getCoefficient(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)  
      }
    }) 
  })
  
  router.post('/watermeter/getdiameter', function (req, res){   
    Model.getDiameter(req, res, function (err, result) {
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