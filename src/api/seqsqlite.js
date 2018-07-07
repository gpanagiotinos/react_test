const Sequelize = require('sequelize')
const dbconfig = require('./config/dboptions').dbconfig
const sequelize = new Sequelize(dbconfig.dbname, dbconfig.dbusername, dbconfig.dbpassword, {
  host: dbconfig.dbhost,
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  storage: dbconfig.storage
})

module.exports = sequelize
