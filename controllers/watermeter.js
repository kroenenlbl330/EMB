const express = require('express')
const Model = require('../models/models.js')

module.exports = function(){
  var router = express.Router();

  router.get('/',function(req,res){
    res.render('main/main')
  })

  router.post('/watermeter', function (req, res){
    
    Model.getWaterMeter(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        result = JSON.stringify(result)
        // console.log(result)
        // res.render('main/main',result)
        res.status(200).send(result)       
      }
    }) 
  })  

  router.post('/watermeter/detail', function (req, res){
    
    Model.getWaterMeterDrawingNumber(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        result = JSON.stringify(result)
        res.status(200).send(result)       
      }
    }) 
  })  

  router.post('/watermeter/del', function (req, res){
    
    Model.delWaterMeterDrawingNumber(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        // result = JSON.stringify(result)
        res.status(200).send(result)  
      }
    }) 
  })

  router.post('/watermeter/updata', function (req, res){
    
    Model.upDataWaterMeterDrawingNumber(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        // result = JSON.stringify(result)
        res.status(200).send(result)  
      }
    }) 
  })

  router.post('/watermeter/add', function (req, res){
    
    Model.addWaterMeter(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        // result = JSON.stringify(result)
        res.status(200).send(result)  
      }
    }) 
  })
  
  router.post('/watermeter/add/collect', function (req, res){
    
    Model.addAssociationCollect(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        // result = JSON.stringify(result)
        res.status(200).send(result)  
      }
    }) 
  })

  router.post('/watermeter/select/watermeterlevel', function (req, res){
    
    Model.selectWaterMeterLevel(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        // result = JSON.stringify(result)
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