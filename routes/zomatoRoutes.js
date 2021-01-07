const router = require('express').Router()
const zomatoController = require('../controllers/zomatoController')

router.get('/cuisines', zomatoController.cuisines)
router.get('/establishments', zomatoController.establishments)
router.get('/search', zomatoController.search)

module.exports = router