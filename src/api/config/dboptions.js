const sqlite3 = require('sqlite3')
const path = require('path')
const dbPath = path.resolve(__dirname, '../dbsqlite/react_test.sqlite')
const db = new sqlite3.Database(dbPath)
const roles =  ['Admin', 'Guest']
// create db tables
db.run('DROP TABLE IF EXISTS roles')
// db.run('DROP TABLE IF EXISTS users')
db.run('CREATE TABLE IF NOT EXISTS users(user_id integer primary key, firstname text, lastname text, username text, email text, password text, role_id integer, createdAt numeric, updatedAt numeric)')
db.run('CREATE TABLE IF NOT EXISTS roles(role_id integer primary key, role_name text)')
db.run('INSERT INTO roles(role_name) VALUES' + roles.map((roles) => '(?)').join(','), roles, (error) => {
	if (error) {
		console.error(error.message)
	}
	console.log('Insert')
})
db.close()
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
