const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.json({page:'home'})
})

app.listen(5000)