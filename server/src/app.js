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

// login in point

app.post('/login', (req, res) => {
  res.send({
    message: `your user : ${req.body.email}  was login`
  })
})

// register in point

app.post('/register', (req, res) => {
  res.send({
    message: `
    firstName: ${req.body.firstName},
    lastName: ${req.body.lastName},
    date: ${req.body.date},
    sexe: ${req.body.sexe},
    email : ${req.body.email},
    password : ${req.body.password},
    password2 : ${req.body.password2},
    phoneNum : ${req.body.phoneNum},
    stat: ${req.body.stat},
    scolarYear: ${req.body.scolarYear} 
     was register`
  })
})

// express application running in port 8081

app.listen(process.env.PORT || 8083)
