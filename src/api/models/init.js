var fs = require('fs')
var path = require('path')
var sequelize = require('../seqsqlite.js')

var models = {}
fs
  .readdirSync('./models')
  .filter(function (file) {
    return ((file.substr(-3) === '.js') && (file !== 'init.js'))
  })
  .forEach(function (file) {
    var model = sequelize.db_con.import(path.join(__dirname, file))
    models[model.name] = model
  })
module.exports = models
