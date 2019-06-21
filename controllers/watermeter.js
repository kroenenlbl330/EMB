const express = require('express')
const Model = require('../models/watermeter.js')

module.exports = function(){
  var router = express.Router();


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

  // router.post('/watermeter/detail', function (req, res){
    
  //   Model.getDrawingCode(req, res, function (err, result) {
  //     if(err){
  //       res.status(404).send('error')
  //     }else{
  //       result = JSON.stringify(result)
  //       res.status(200).send(result)       
  //     }
  //   }) 
  // })

  router.post('/watermeter/detail', function (req, res){
    
    Model.getID(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        result = JSON.stringify(result)
        res.status(200).send(result)       
      }
    }) 
  }) 

  router.post('/watermeter/del', function (req, res){
    
    Model.delWaterMeter(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        // result = JSON.stringify(result)
        res.status(200).send(result)  
      }
    }) 
  })

  router.post('/addmeter', function (req, res){
    
    Model.addMeter(req, res, function (err, result) {
      if(err){
        res.status(404).send('error')
      }else{
        // result = JSON.stringify(result)
        res.status(200).send(result)  
      }
    }) 
  })

  router.post('/editmeter', function (req, res){
    
    Model.editMeter(req, res, function (err, result) {
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

  // 当采集信息变更时修改对应水表中relevance的值
  router.post('/watermeter/updata/relevance', function (req, res){
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
  router.post('/watermeter/empty/relevance', function (req, res){
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