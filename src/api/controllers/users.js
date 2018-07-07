var models = require('../models/init.js')
var router = require('express').Router()

const builduser = (req) => {
  return models.users.build(req.body.data)
}
router.route('/users', (req, res, next) => {
  res.status(200)
  res.json({
    message: 'Great Success'
  })
  res.end()
})
