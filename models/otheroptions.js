var dbconfig = require('../config/database.js')
var mysql = require('mysql')

var db = mysql.createPool(dbconfig.mysql)

// 查询meter_coefficient表中水的系数
exports.getCoefficient = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM coefficient`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}
// 查询department表
exports.getDepartment = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM department`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}
// 查询supply表
exports.getSupply = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM supply`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}
// 查询meteruse表
exports.getMeterUse = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM meteruse`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}
// 查询purpose表
exports.getPurpose = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM purpose`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 查询watermeterlevel表
exports.returnLevel = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM watermeter WHERE level='${req.body.level}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 查询build表
exports.getBulid = function(req,res,callback){
  // console.log(req.body.WaterMeterLevelMinusOne)
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM build`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 查询superior表
exports.getSuperior = function(req,res,callback){
  // console.log(req.body.WaterMeterLevelMinusOne)
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM superior`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}

// 查询school表
exports.getSchool = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM school`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}