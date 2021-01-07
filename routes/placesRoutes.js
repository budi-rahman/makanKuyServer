const express = require('express')
const router = express.Router()
const {PlaceController} = require('../controllers/placeController')

router.get('/list', PlaceController.getAll)

module.exports = router