const models = require( '../models/init.js')
const router = require('express').Router()
const builduser = (req) => {
  return models.users.build(req.body.data)
}
// user available roles
const findroles = () => {
	return models.role.findAll({})
}
router.post('/create', (req, res, next) => {
	  res.status(200)
	  res.json({
	    message: 'Great Success'
	  })
	  res.end()
	})
router.post('/roles', (req, res) => {
	findroles().then((roles) => {
	  res.status(200)
	  res.json({
	    roles: roles
	  })
	  res.end()
	})
})
module.exports = router