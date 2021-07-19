const { UserNonValide } = require('../models')
const { Compte } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await UserNonValide.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(400).send({ error: `This email account is already in use. ${err}` })
    }
  },

  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await Compte.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        res.status(400).send({
          error: 'The login information was incorrect {email} !'
        })
      } else {
        if (user.state === 'ACTIVATED') {
          const isPasswordValid = await user.comparePassword(password)
          if (!isPasswordValid) {
            res.status(400).send({
              error: `The login information was incorrect ${isPasswordValid} ${password} and ${user.password} !`
            })
          } else {
            const userJson = user.toJSON()
            res.send({
              user: userJson,
              token: jwtSignUser(userJson),
              message: `The login information isPasswordValid : ${isPasswordValid}`
            })
          }
        } else {
          res.status(400).send({
            error: 'This account is desactivated !'
          })
        }
      }
    } catch (err) {
      res.status(500).send({ error: `An error occured trying to login ${err}` })
    }
  },

  resetpw (req, res) {
    res.send({
      message: `user : ${req.body.email} \n check your email`
    })
  }

}
