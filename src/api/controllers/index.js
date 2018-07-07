var router = require('express').Router()

router.use('/user', require('./user.js'))
router.get('/', (req, res) => {
	res.status(200)
	res.send('Welcome to react')
	res.end()
})

module.exports = router