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
exports.getWaterMeterDrawingNumber = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM watermeter WHERE MeterID='${req.body.checkedID}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 删除watermeter表中的DrawingNunber字段的数据
exports.delWaterMeterDrawingNumber = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`DELETE FROM watermeter WHERE MeterID='${req.body.delID}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 修改watermeter表中的DrawingNunber字段的数据
exports.upDataWaterMeterDrawingNumber = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`UPDATE watermeter SET MeterID='${req.body.checkedID}', WaterMeterName='${req.body.WaterMeterName}', InstallationSite='${req.body.InstallationSite}', AssociationCollect='${req.body.AssociationCollect}', Coefficient='${req.body.Coefficient}', PipeDiameter='${req.body.PipeDiameter}', WaterMeterLevel='${req.body.WaterMeterLevel}', EnergyCode='${req.body.EnergyCode}', SuperiorMeter='${req.body.SuperiorMeter}', PowerType='${req.body.PowerType}', MeterUse='${req.body.MeterUse}', SubordinateDepartments='${req.body.SubordinateDepartments}', Note='${req.body.Note}' WHERE DrawingNumber='${req.body.DelData}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 添加watermeter表的数据
exports.addWaterMeter = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`INSERT INTO watermeter (DrawingNumber, WaterMeterName, InstallationSite, Coefficient, PipeDiameter, AssociationCollect, WaterMeterLevel, EnergyCode, SuperiorMeter, SuperiorMeterName, PowerType, MeterUse, SubordinateDepartments, Note) VALUES 
                ('${req.body.DrawingNumber}', '${req.body.WaterMeterName}', '${req.body.InstallationSite}', '${req.body.Coefficient}', '${req.body.PipeDiameter}', '${req.body.AssociationCollect}', '${req.body.WaterMeterLevel}', '${req.body.EnergyCode}', '${req.body.SuperiorMeter}', '${req.body.SuperiorMeterName}', '${req.body.PowerType}', '${req.body.MeterUse}', '${req.body.SubordinateDepartments}', '${req.body.Note}')`, function (err, result) {
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
  console.log(req.body.WaterMeterLevelMinusOne)
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM watermeter WHERE WaterMeterLevel='${req.body.WaterMeterLevelMinusOne}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}