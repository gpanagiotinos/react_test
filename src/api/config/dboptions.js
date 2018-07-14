const sqlite3 = require('sqlite3')
const path = require('path')
const dbPath = path.resolve(__dirname, '../dbsqlite/react_test.sqlite')
const db = new sqlite3.Database(dbPath)
// create db tables
db.run('CREATE TABLE IF NOT EXISTS users(user_id integer primary key, firstname text, lastname text, username text, email text, password text, role integer)')
db.run('CREATE TABLE IF NOT EXISTS roles(role_id integer primary key, role_name text)')

// sqlite configuration
var dbconfig = {
  dbname: 'react_test',
  dbusername: null,
  dbpassword: null,
  dbhost: 'localhost',
  storage: db.filename
}

module.exports = {
  dbconfig: dbconfig
}
