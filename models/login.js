var dbconfig = require('../config/database.js')
var mysql = require('mysql')

var db = mysql.createPool(dbconfig.mysql)


exports.getUsers = function(req,res,callback){
  db.getConnection(function (err, connection) {
      db.query(`SELECT * FROM users WHERE username='${req.body.username}'`, function (err, result) {
          callback(err,result)
          connection.release()
      })
  })
}