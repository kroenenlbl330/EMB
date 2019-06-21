var dbconfig = require('../config/database.js')
var mysql = require('mysql')

var db = mysql.createPool(dbconfig.mysql)

// 查询waterconcentrator表
exports.getWaterConcentrator = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM waterconcentrator`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 为waterconcentrator表添加数据
exports.addWaterConcentrator = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`INSERT INTO waterconcentrator (
        communicationcode, 
        equipmentcode, 
        site, 
        school,
        supply, 
        state
        ) VALUES (
        '${req.body.communicationcode}', 
        '${req.body.equipmentcode}', 
        '${req.body.site}', 
        '${req.body.school}',
        '${req.body.supply}', 
        '${req.body.state}'
        )`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 查询waterconcentrator表中该id数据
exports.detailWaterConcentrator = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM waterconcentrator WHERE id='${req.body.id}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 修改waterconcentrator表中该id数据
exports.editWaterConcentrator = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`UPDATE waterconcentrator SET communicationcode='${req.body.communicationcode}', 
                                        equipmentcode='${req.body.equipmentcode}', 
                                        site='${req.body.site}', 
                                        school='${req.body.school}', 
                                        supply='${req.body.supply}',
                                        state='${req.body.state}'
                  WHERE id='${req.body.id}'`, 
                  function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}