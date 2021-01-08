const router = require('express').Router()
const zomatoController = require('../controllers/zomatoController')

router.get('/cuisines', zomatoController.cuisines)
router.get('/establishments', zomatoController.establishments)
router.get('/all', zomatoController.all)
router.get('/search/cuisine/:cuisine_id', zomatoController.searchCuisine)
router.get('/search/establishment/:establishment_id', zomatoController.searchEstablishment)
router.get('/search/:cuisine_id/:establishment_id', zomatoController.search)

module.exports = router