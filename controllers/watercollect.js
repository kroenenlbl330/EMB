const express = require('express')
const Model = require('../models/watercollect.js')

module.exports = function(){
  var router = express.Router()

  // router.get('/',function(req,res){
  //   res.render('main/main')
  // })

  router.post('/watercollect', function (req, res){  
    Model.getWaterCollect(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        result = JSON.stringify(result)
        res.status(200).send(result)       
      }
    }) 
  }) 

  router.post('/watercollect/add', function (req, res){
    Model.addWaterCollect(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        res.status(200).send(result)  
      }
    }) 
  })

  router.post('/watercollect/detail', function (req, res){  
    Model.getID(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        result = JSON.stringify(result)
        res.status(200).send(result)       
      }
    }) 
  })
  
  router.post('/watercollect/del', function (req, res){  
    Model.delWaterCollect(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        result = JSON.stringify(result)
        res.status(200).send(result)       
      }
    }) 
  })

  router.post('/watercollect/updata', function (req, res){
    
    Model.updataWaterCollect(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        // result = JSON.stringify(result)
        res.status(200).send(result)  
      }
    }) 
  })

  router.post('/watercollect/clearrelevance', function (req, res){  
    Model.clearRelevance(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        result = JSON.stringify(result)
        res.status(200).send(result)       
      }
    }) 
  })

  // 当采集信息变更时修改对应水表中relevance的值
  router.post('/watercollect/updata/relevance', function (req, res){
    Model.updataRelevance(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        // result = JSON.stringify(result)
        res.status(200).send(result)  
      }
    }) 
  })

  // 当删除采集时清空对应水表中relevance_id和relevance的值
  router.post('/watercollect/empty/relevance', function (req, res){  
    Model.emptyRelevance(req, res, function (err, result) {
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