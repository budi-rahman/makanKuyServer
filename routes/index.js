const express = require('express')
const router = express.Router()
const userRouter = require('./userRoutes')
const placeRouter = require('./placesRoutes')
const { authenticate } = require('../middlewares/auth')

router.get('/', (req, res) => {
    res.send('Hello World!')
})  

router.use('/user', userRouter) // romi
router.use(authenticate)     // romi
router.use('/places', placeRouter)  // rozak

module.exports = router