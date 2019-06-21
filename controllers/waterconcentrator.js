const express = require('express')
const Model = require('../models/waterconcentrator.js')

module.exports = function(){
  var router = express.Router()

  router.post('/waterconcentrator', function (req, res){
    Model.getWaterConcentrator(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)  
      }
    }) 
  })

  router.post('/waterconcentrator/add', function (req, res){
    Model.addWaterConcentrator(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)  
      }
    }) 
  })

  router.post('/waterconcentrator/edit', function (req, res){  
    Model.editWaterConcentrator(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        result = JSON.stringify(result)
        res.status(200).send(result)       
      }
    }) 
  })

  router.post('/waterconcentrator/detail', function (req, res){  
    Model.detailWaterConcentrator(req, res, function (err, result) {
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