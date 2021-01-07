const express = require('express')
const router = express.Router()
const {UserController} = require('../controllers/userController')
const {register} = require('../controllers/userController')

router.post('/register', register)
router.post('/login', UserController.login)

module.exports = router