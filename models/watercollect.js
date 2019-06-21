var dbconfig = require('../config/database.js')
var mysql = require('mysql')

var db = mysql.createPool(dbconfig.mysql)

// 查询watercollect表
exports.getWaterCollect = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM watercollect`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 添加watercollect表的数据
exports.addWaterCollect = function(req,res,callback){
  db.getConnection(function (err, connection) {
    db.query(`INSERT INTO watercollect (
      communicationcode, 
      equipmentcode, 
      site, 
      school,
      relevance_id,
      relevance, 
      supply, 
      state
      ) VALUES (
      '${req.body.communicationcode}', 
      '${req.body.equipmentcode}', 
      '${req.body.site}', 
      '${req.body.school}',
      '${req.body.relevance_id}',
      '${req.body.relevance}',
      '${req.body.supply}', 
      '${req.body.state}'
      )`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 查询watercollect表中的id字段的数据
exports.getID = function(req,res,callback){
  db.getConnection(function (err, connection) {
    db.query(`SELECT * FROM watercollect WHERE id='${req.body.id}'`, function (err, result) {
      callback(err,result)
      connection.release()
    })
  })
}

// 查询watermeter表中AssociationCollect字段为空的数据
exports.getWaterMeterAssociationCollect = function(req,res,callback){
  db.getConnection(function (err, connection) {
    db.query(`SELECT * FROM watermeter WHERE AssociationCollect IS NULL`, function (err, result) {
      callback(err,result)
      connection.release()
    })
  })
}

// 删除watercollect表中的CommunicationNumber字段的数据
exports.delWaterCollect = function(req,res,callback){
  db.getConnection(function (err, connection) {
    db.query(`UPDATE watercollect SET state='${req.body.state}' WHERE id='${req.body.delID}'`, function (err, result) {
      callback(err,result)
      connection.release()
    })
  })
}

// 修改watercollect表
exports.updataWaterCollect = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`UPDATE watercollect SET communicationcode='${req.body.communicationcode}', 
                                        equipmentcode='${req.body.equipmentcode}', 
                                        site='${req.body.site}', 
                                        school='${req.body.school}', 
                                        relevance_id='${req.body.relevance_id}', 
                                        relevance='${req.body.relevance}', 
                                        supply='${req.body.supply}',
                                        state='${req.body.state}'
                  WHERE id='${req.body.id}'`, 
                  function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

exports.clearRelevance = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`UPDATE watermeter SET relevance='' WHERE id='${req.body.meterid}'`, 
      function (err, result) {
        callback(err,result)
        connection.release()
      })
  })
}

// 当采集信息变更时修改对应水表中relevance的值
exports.updataRelevance = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`UPDATE watercollect 
      SET 
      relevance='${req.body.relevance}'
      WHERE 
      id='${req.body.id}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 当删除采集时清空对应水表中relevance_id和relevance的值
exports.emptyRelevance = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`UPDATE watercollect
      SET 
      relevance='${req.body.relevance}',
      relevance_id='${req.body.relevance_id}'
      WHERE 
      id='${req.body.id}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}
