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
      db.query(`SELECT * FROM watermeter WHERE DrawingNumber='${req.body.DrawingNumber}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 删除watermeter表中的DrawingNunber字段的数据
exports.delWaterMeterDrawingNumber = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`DELETE FROM watermeter WHERE DrawingNumber='${req.body.DelData}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 修改watermeter表中的DrawingNunber字段的数据
exports.upDataWaterMeterDrawingNumber = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`UPDATE watermeter SET DrawingNumber='${req.body.DrawingNumber}', WaterMeterName='${req.body.WaterMeterName}', InstallationSite='${req.body.InstallationSite}', AssociationCollect='${req.body.AssociationCollect}', Coefficient='${req.body.Coefficient}', PipeDiameter='${req.body.PipeDiameter}', WaterMeterLevel='${req.body.WaterMeterLevel}', EnergyCode='${req.body.EnergyCode}', SuperiorMeter='${req.body.SuperiorMeter}', PowerType='${req.body.PowerType}', MeterUse='${req.body.MeterUse}', SubordinateDepartments='${req.body.SubordinateDepartments}', Note='${req.body.Note}' WHERE DrawingNumber='${req.body.DelData}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 添加watermeter表的数据
exports.addWaterMeter = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`INSERT INTO watermeter (DrawingNumber, WaterMeterName, InstallationSite, AssociationCollect, Coefficient, PipeDiameter, WaterMeterLevel, EnergyCode, SuperiorMeter, PowerType, MeterUse, SubordinateDepartments, Note) VALUES ('${req.body.DrawingNumber}', '${req.body.WaterMeterName}', '${req.body.InstallationSite}', '${req.body.AssociationCollect}', '${req.body.Coefficient}', '${req.body.PipeDiameter}', '${req.body.WaterMeterLevel}', '${req.body.EnergyCode}', '${req.body.SuperiorMeter}', '${req.body.PowerType}', '${req.body.MeterUse}', '${req.body.SubordinateDepartments}', '${req.body.Note}')`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}



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
    console.log(`INSERT INTO watercollect (CommunicationNumber, HardwareSerialNumber, InstallationSite, AssociationMeter, PowerType, Note) VALUES ('${req.body.CommunicationNumber}', '${req.body.HardwareSerialNumber}', '${req.body.InstallationSite}', '${req.body.AssociationMeter}', '${req.body.PowerType}', '${req.body.Note}')`)
    db.query(`INSERT INTO watercollect (CommunicationNumber, HardwareSerialNumber, InstallationSite, AssociationMeter, PowerType, Note) VALUES ('${req.body.CommunicationNumber}', '${req.body.HardwareSerialNumber}', '${req.body.InstallationSite}', '${req.body.AssociationMeter}', '${req.body.PowerType}', '${req.body.Note}')`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 添加watermeter表的AssociationCollect字段数据
exports.addAssociationCollect = function(req,res,callback){
  db.getConnection(function (err, connection) {
    db.query(`UPDATE watermeter SET AssociationCollect='${req.body.CommunicationNumber}' WHERE DrawingNumber='${req.body.DrawingNumber}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 查询watercollect表中的CommunicationNumber字段的数据
exports.getWaterMeterCommunicationNumber = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM watercollect WHERE CommunicationNumber='${req.body.CommunicationNumber}'`, function (err, result) {
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