const express = require('express')
const Model = require('../models/models.js')

module.exports = function(){
  var router = express.Router();

  router.get('/',function(req,res){
    res.render('main/main')
  })

  router.post('/watercollect', function (req, res){  
    Model.getWaterCollect(req, res, function (err, result) {
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

  router.post('/watercollect/add', function (req, res){
    Model.addWaterCollect(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        // result = JSON.stringify(result)
        res.status(200).send(result)  
      }
    }) 
  })

  router.post('/watercollect/detail', function (req, res){  
    Model.getWaterMeterCommunicationNumber(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        result = JSON.stringify(result)
        res.status(200).send(result)       
      }
    }) 
  })

  
  router.post('/watermeter/association', function (req, res){  
    Model.getWaterMeterAssociationCollect(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        result = JSON.stringify(result)
        res.status(200).send(result)       
      }
    }) 
  })
  
  return router
}