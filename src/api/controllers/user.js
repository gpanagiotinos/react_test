const models = require( '../models/init.js')
const router = require('express').Router()
const builduser = (req) => {
  return models.users.build(req.body.data)
}

router.post('/create', (req, res, next) => {
	  res.status(200)
	  res.json({
	    message: 'Great Success'
	  })
	  res.end()
	})
module.exports = router