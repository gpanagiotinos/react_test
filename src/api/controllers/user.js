const models = require('../models/init.js')
const router = require('express').Router()

const errorhandler = (error, res) => {
  try {
    console.log('Error: ', error)
    if (JSON.parse(error.message).status === 404) {
      res.status(404)
      res.json({
        message: JSON.parse(error.message).message
      })
      res.end()
    } else if (JSON.parse(error.message).status === 401) {
      res.status(401)
      res.json({
        message: JSON.parse(error.message).message
      })
      res.end()
    }
  } catch (error) {
    if (error.errors[0].type === 'Validation error') {
      error.errors.forEach((element) => {
        delete element.origin
        delete element.instance
        delete element.validatorKey
        delete element.validatorName
        delete element.validatorArgs
        delete element.__raw
      })
      res.status(400)
      res.json({
        message: 'Bad Request',
        data: error.errors
      })
      res.end()
    } else {
      res.status(500)
      res.json({
        message: 'Sorry about that! Server Error'
      })
      res.end()
    }
  }
}
// build user model
const builduser = (req) => {
  return new Promise((resolve, reject) => {
    if (req.body) {
      resolve(models.user.build(req.body.data))
    } else {
      reject(new Error(JSON.stringify({status: 404, message: 'No Data'})))
    }
  })
}
// validate user model
const validate = (data) => {
  return data.validate()
}

// save user model
const save = (data) => {
  return data.save()
}
// find user
const loginuser = (data) => {
  return models.user.findOne({
    where: {
      username: data.username,
      password: data.password
    }
  })
}

// find user
const findallusers = () => {
  return models.user.findAll()
}
// find user by id
const finduser = (data) => {
  return models.user.findOne({
    where: {
      user_id: data.user_id
    }
  })
}
// find user by id
const updateuser = (user, data) => {
  return user.update({
    firstname: data.firstname,
    lastname: data.lastname,
    username: data.username,
    password: data.password,
    email: data.email
  })
}
// create user
router.post('/create', (req, res, next) => {
  builduser(req).then((data) => {
    return data
  }).then((data) => {
    return validate(data)
  }).then((data) => {
    return save(data)
  }).then((data) => {
    res.status(200)
    res.json({
      message: 'User saved',
      data: data.dataValues
    })
    res.end()
  }).catch((error) => {
    errorhandler(error, res)
  })
})
// login user
router.post('/login', (req, res, next) => {
  loginuser(req.body.data).then((data) => {
    if (data !== null) {
      res.status(200)
      res.json({
        message: 'User logged in'
      })
      res.end()
    } else {
      throw new Error(JSON.stringify({status: 401, message: 'Unauthorized'}))
    }
  }).catch((error) => {
    errorhandler(error, res)
  })
})
// all users
router.post('/users', (req, res, next) => {
  findallusers().then((data) => {
    res.status(200)
    res.json({
      message: 'All Users',
      data: data
    })
    res.end()
  }).catch((error) => {
    errorhandler(error, res)
  })
})
// find user
router.post('/user', (req, res, next) => {
  finduser(req.body.data).then((data) => {
    if (data !== null) {
      res.status(200)
      res.json({
        message: 'User',
        data: data
      })
      res.end()
    } else {
      throw new Error(JSON.stringify({status: 404, message: 'User not Found'}))
    }
  }).catch((error) => {
    errorhandler(error, res)
  })
})
// update user
router.post('/update', (req, res, next) => {
  finduser(req.body.data).then((data) => {
    if (data !== null) {
      return data
    } else {
      throw new Error(JSON.stringify({status: 404, message: 'User not Found'}))
    }
  }).then((data) => {
    return updateuser(data, req.body.data)
  }).then((data) => {
    res.status(200)
    res.json({
      message: 'User ' + data.dataValues.username + ' Updated'
    })
    res.end()
  }).catch((error) => {
    errorhandler(error, res)
  })
})
module.exports = router
