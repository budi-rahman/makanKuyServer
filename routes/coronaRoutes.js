const router = require('express').Router()
const CoronaController = require('../controllers/coronaController')

router.get('/global', CoronaController.coronaGlobal)
router.get('/indonesia', CoronaController.coronaIndonesia)
router.get('/indonesia/provinsi', CoronaController.coronaIndonesiaProvinsi)

module.exports = router