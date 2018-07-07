const express = require('express')
const path = require('path')
const dbconnection = require('./seqsqlite.js')

dbconnection.authenticate().then(() => {
  console.log('connected to DB')
}).catch((error) => {
  console.error('Unable to connect to DB:', error)
})

const app = express()
app.use(express.static(path.join(__dirname, 'dist')))
app.listen(3000, () => {
  console.log('Api is On')
})
