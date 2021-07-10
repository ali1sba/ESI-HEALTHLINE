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

console.log('server is on on the  :  http://localhost:8083')
console.log('routes available     :  http://localhost:8083/register')

// a simple examlple of a get request (in point)

app.post('/register', (req, res) => {
  res.send({
    message: `your user : ${req.body.email}  was register`
  })
})

// express application running in port 8081

app.listen(process.env.PORT || 8083)
