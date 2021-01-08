if (process.env.NODE_ENV === "development") {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')
const errorHnadler = require('./middlewares/errorHandler')
const errorHandlers = require('./middlewares/errorHandler')
const cors = require('cors')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


app.use(router)
app.use(errorHandlers)

app.listen(port, () => {
  console.log(`Bismillah jalan di port ${port}`)
})

