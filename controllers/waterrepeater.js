const express = require('express')
const Model = require('../models/waterrepeater.js')

module.exports = function(){
  var router = express.Router();

  // router.get('/',function(req,res){
  //   res.render('main/main')
  // })

  router.post('/waterrepeater', function (req, res){  
    Model.getWaterRepeater(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        result = JSON.stringify(result)
        res.status(200).send(result)       
      }
    }) 
  }) 

  router.post('/waterrepeater/add', function (req, res){
    Model.addWaterRepeater(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)  
      }
    }) 
  })

  router.post('/waterrepeater/detail', function (req, res){  
    Model.detailWaterRepeater(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        result = JSON.stringify(result)
        res.status(200).send(result)       
      }
    }) 
  })

  router.post('/waterrepeater/edit', function (req, res){  
    Model.editWaterRepeater(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        result = JSON.stringify(result)
        res.status(200).send(result)       
      }
    }) 
  })
  
  router.post('/waterrepeater/del', function (req, res){  
    Model.delWaterRepeater(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        result = JSON.stringify(result)
        res.status(200).send(result)       
      }
    }) 
  })

  // 当集中器信息变更时修改对应中继中relevance的值
  router.post('/waterrepeater/updata/relevance', function (req, res){
    Model.updataRelevance(req, res, function (err, result) {
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