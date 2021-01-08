const express = require('express')
const router = express.Router()
const userRouter = require('./userRoutes')
const placeRouter = require('./placesRoutes')
const coronaRouter = require('./coronaRoutes')
const zomatoRouter = require('./zomatoRoutes')
const weatherRouter = require('./weatherRoutes')
const { authenticate } = require('../middlewares/auth')

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.use('/weather', weatherRouter)  // rozak
router.use('/zomato', zomatoRouter)  // rozak
router.use('/places', placeRouter)  // rozak
router.use('/corona', coronaRouter)
router.use('/user', userRouter) // romi
router.use(authenticate)     // romi

module.exports = router