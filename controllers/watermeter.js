const express = require('express')
const Model = require('../models/watermeter.js')

module.exports = function(){
  var router = express.Router();


  router.post('/watermeter/a', function (req, res){
    
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
    
    Model.getMeterDrawingCode(req, res, function (err, result) {
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

  router.post('/watermeter/add/superior', function (req, res){
    
    Model.selectWaterMeterSuperior(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        // result = JSON.stringify(result)
        res.status(200).send(result)  
      }
    }) 
  })

  return router
}