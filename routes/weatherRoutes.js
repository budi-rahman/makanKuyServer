const router = require('express').Router()
const WeatherController = require('../controllers/weatherController')

router.get('/current', WeatherController.getWeather)

module.exports = router