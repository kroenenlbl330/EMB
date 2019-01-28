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
    db.query(`INSERT INTO watercollect (CommunicationNumber, HardwareSerialNumber, InstallationSite, AssociationMeter, PowerType, Note) VALUES ('${req.body.CommunicationNumber}', '${req.body.HardwareSerialNumber}', '${req.body.InstallationSite}', '${req.body.AssociationMeter}', '${req.body.PowerType}', '${req.body.Note}')`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 查询watercollect表中的CommunicationNumber字段的数据
exports.getWaterMeterCommunicationNumber = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM watercollect WHERE MeterID='${req.body.checkedID}'`, function (err, result) {
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
exports.delWaterCollectCommunicationNumber = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`DELETE FROM watercollect WHERE MeterID='${req.body.delID}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 修改watercollect表中的CommunicationNumber字段的数据
exports.upDataWaterCollectCommunicationNumber = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`UPDATE watercollect SET CommunicationNumber='${req.body.CommunicationNumber}', 
                                        HardwareSerialNumber='${req.body.HardwareSerialNumber}', 
                                        InstallationSite='${req.body.InstallationSite}', 
                                        AssociationMeter='${req.body.AssociationMeter}', 
                                        PowerType='${req.body.PowerType}', 
                                        Note='${req.body.Note}'
                  WHERE MeterID='${req.body.checkedID}'`, 
                  function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

