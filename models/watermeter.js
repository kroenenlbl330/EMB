var dbconfig = require('../config/database.js')
var mysql = require('mysql')

var db = mysql.createPool(dbconfig.mysql)

// 查询watermeter表
exports.getWaterMeter = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM watermeter`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 查询watermeter表中的DrawingNunber字段的数据
exports.getDrawingCode = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM watermeter WHERE drawingcode='${req.body.checkedcode}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

exports.getID = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM watermeter WHERE id='${req.body.id}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 删除watermeter表中的DrawingNunber字段的数据
exports.delWaterMeter = function(req,res,callback){
  db.getConnection(function (err, connection) {
      // db.query(`DELETE FROM watermeter WHERE MeterID='${req.body.delID}'`, function (err, result) {
        db.query(`UPDATE watermeter SET state='${req.body.state}' WHERE id='${req.body.delID}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 添加meter表的数据
exports.addMeter = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`INSERT INTO watermeter (
        energycode, 
        drawingcode, 
        name, 
        site, 
        superior,
        relevance,
        relevance_id,
        level,
        school,
        build, 
        department, 
        purpose, 
        supply, 
        coefficient, 
        diameter,  
        state) VALUES (
          '${req.body.energycode}', 
          '${req.body.drawingcode}', 
          '${req.body.name}', 
          '${req.body.site}', 
          '${req.body.superior}',
          '${req.body.relevance}',
          '${req.body.relevance_id}',
          '${req.body.level}', 
          '${req.body.school}', 
          '${req.body.build}', 
          '${req.body.department}', 
          '${req.body.purpose}', 
          '${req.body.supply}', 
          '${req.body.coefficient}', 
          '${req.body.diameter}', 
          '${req.body.state}')`, 
        function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 修改meter表中的id字段的数据
exports.editMeter = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`UPDATE watermeter SET 
      energycode='${req.body.energycode}', 
      drawingcode='${req.body.drawingcode}', 
      site='${req.body.site}', 
      name='${req.body.name}', 
      superior='${req.body.superior}', 
      relevance='${req.body.relevance}', 
      relevance_id='${req.body.relevance_id}', 
      level='${req.body.level}', 
      build='${req.body.build}', 
      department='${req.body.department}', 
      purpose='${req.body.purpose}', 
      supply='${req.body.supply}', 
      coefficient='${req.body.coefficient}', 
      diameter='${req.body.diameter}', 
      state='${req.body.state}' 
      WHERE id='${req.body.id}'`, 
      function (err, result) {
        callback(err,result)
        connection.release()
      })
  })
}

// 为watercollect表插入AssociationCollect字段数据
exports.addAssociationCollect = function(req,res,callback){
  db.getConnection(function (err, connection) {
    db.query(`UPDATE watercollect SET AssociationMeter='${req.body.DrawingNumber}' WHERE CommunicationNumber='${req.body.AssociationCollect}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 查询watermeter表中WaterMeterLevel
exports.selectWaterMeterSuperior = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM watermeter WHERE WaterMeterLevel='${req.body.WaterMeterLevelMinusOne}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 当采集信息变更时修改对应水表中relevance的值
exports.updataRelevance = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`UPDATE watermeter 
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
      db.query(`UPDATE watermeter 
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