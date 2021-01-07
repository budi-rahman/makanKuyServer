const router = require('express').Router()
const CoronaController = require('../controllers/coronaController')

router.get('/global', CoronaController.coronaGlobal)
router.get('/indonesia', CoronaController.coronaIndonesia)

module.exports = router