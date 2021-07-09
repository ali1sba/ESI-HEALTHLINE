import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const app = express()

// to get some lod in the terminal

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// to show that server is on

console.log('server is on')

// a simple examlple of a get request

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

// express application running in port 8081

app.listen(process.env.PORT || 8081)
