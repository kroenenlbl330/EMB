var dbconfig = require('../config/database.js')
var mysql = require('mysql')

var db = mysql.createPool(dbconfig.mysql)

// 查询waterrepeater表
exports.getWaterRepeater = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM waterrepeater`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 为waterrepeater表添加数据
exports.addWaterRepeater = function(req,res,callback){
  db.getConnection(function (err, connection) {
    db.query(`INSERT INTO waterrepeater (
      communicationcode, 
      equipmentcode, 
      site, 
      school,
      superior,
      relevance_id,
      relevance, 
      supply, 
      state
      ) VALUES (
      '${req.body.communicationcode}', 
      '${req.body.equipmentcode}', 
      '${req.body.site}', 
      '${req.body.school}',
      '${req.body.superior}',
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

// 查询waterrepeater表中该id数据
exports.detailWaterRepeater = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM waterrepeater WHERE id='${req.body.id}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 修改waterrepeater表中该id数据
exports.editWaterRepeater = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`UPDATE waterrepeater SET 
      communicationcode='${req.body.communicationcode}', 
      equipmentcode='${req.body.equipmentcode}', 
      site='${req.body.site}', 
      school='${req.body.school}', 
      relevance_id='${req.body.relevance_id}', 
      relevance='${req.body.relevance}', 
      superior='${req.body.superior}', 
      supply='${req.body.supply}',
      state='${req.body.state}' 
      WHERE id='${req.body.id}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 删除waterrepeater表中该id数据
exports.delWaterRepeater = function(req,res,callback){
  db.getConnection(function (err, connection) {
    db.query(`UPDATE waterrepeater SET state='${req.body.state}' WHERE id='${req.body.delID}'`, function (err, result) {
      callback(err,result)
      connection.release()
    })
  })
}

// 当集中器信息变更时修改对应中继中relevance的值
exports.updataRelevance = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`UPDATE waterrepeater
      SET 
      relevance='${req.body.relevance}'
      WHERE 
      id='${req.body.id}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}