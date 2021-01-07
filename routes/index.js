const express = require('express')
const router = express.Router()
const userRouter = require('./userRoutes')
const placeRouter = require('./placesRoutes')
const coronaRouter = require('./coronaRoutes')

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.use('/user', userRouter) // romi
// router.use(authenticate)     // romi
router.use('/places', placeRouter)  // rozak
router.use('/corona', coronaRouter)

module.exports = router