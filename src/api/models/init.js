var fs = require('fs')
var path = require('path')
var sequelize = require('../seqsqlite.js')

var dbmodel = {}
fs
  .readdirSync('src/api/models')
  .filter(function (file) {
    return ((file.substr(-3) === '.js') && (file !== 'init.js'))
  })
  .forEach(function (file) {
  	console.log(file)
    var model = sequelize.import(path.join(__dirname, file))
    dbmodel[model.name] = model
  })
module.exports = dbmodel
