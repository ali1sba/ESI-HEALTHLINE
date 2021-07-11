const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()

// to get some lod in the terminal

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// All endpoints
require('./routes')(app)

// express application running in port 8081
sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started successfully on port ${config.port}`)
  })
