const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { sequelize } = require('./models')
const config = require('./config/config')

const cookieSession = require('cookie-session')
const passport = require('passport')

const app = express()

// to get some lod in the terminal
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.use(cookieSession({
  name: 'mysession',
  keys: ['vueauthrandomkey'],
  maxAge: 24 * 60 * 60 * 1000 * 7 // 1 week
}))

// let’s instruct our Node.js app that we want to use Passport.js
app.use(passport.initialize())

// tell Passport.js to start its session management system
app.use(passport.session())

// All endpoints
require('./routes')(app)

// express application running in port 8081
sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started successfully on port ${config.port}`)
  })
