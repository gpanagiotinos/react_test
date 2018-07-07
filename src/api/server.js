const express = require('express')
const path = require('path')
const dbconnection = require('./seqsqlite.js')
const cors = require('cors')

const app = express()
dbconnection.authenticate().then(() => {
	app.use('/', require('./controllers'))
  console.log('connected to DB')
}).catch((error) => {
  console.error('Unable to connect to DB:', error)
})

app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')))
app.listen(3000, () => {

  console.log('Api is On')
})
module.exports = app