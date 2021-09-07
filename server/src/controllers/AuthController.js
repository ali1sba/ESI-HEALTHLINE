const express = require('express')
const app = express()
// var fs = require("fs")
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
  extended: true
}))
const { UserNonValide } = require('../models')
const { Compte } = require('../models')
const { User } = require('../models')
const { ResetPasswordRequest } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const { uuid } = require('uuidv4')
const SendEmail = require('./SendEmail')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const email = req.body.email
      const userExist = await Compte.findOne({
        where: {
          email: email
        }
      })
      if (!userExist) {
        const user = await UserNonValide.create(req.body)
        const userJson = user.toJSON()
        res.send({
          user: userJson,
          token: jwtSignUser(userJson)
        })
      } else {
        res.status(400).send({ error: 'This email account is already in use.' })
      }
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
            const userData = {
              id: userJson.id,
              role: userJson.role,
              token: jwtSignUser(userJson)
            }
            res.status(200).send({
              user: userData
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

  async loginMobile (req, res) {
    try {
      const email = req.body.email
      const password = req.body.password
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
            const compteId = user.id
            const userAccount = await User.findOne({
              where: {
                idCompte: compteId
              }
            })
            const object = {
              id: userAccount.id,
              email: email,
              nom: userAccount.firstName,
              prenom: userAccount.lastName,
              number: userAccount.phoneNum
            }
            const objecttosend = JSON.stringify(object)
            res.status(200).send(objecttosend)
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

  /*
  async logout (req, res) {
    try {
      req.logout()
      res.send({
        message: 'You are logged out'
      })
    } catch (err) {
      res.status(400).send({ error: `logout error: ${err}` })
    }
  },
  */
  async forgotpw (req, res, next) {
    try {
      const email = req.body.email
      const user = await Compte.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        res.send({
          error: 'User do not exist'
        })
        // return res.redirect('/resetpw')
      } else {
        const resetPasswordToken = uuid()
        // const resetPasswordExpires = Date.now() + 600000 // 10 min
        const request = {
          email: email,
          resetPasswordToken: resetPasswordToken
        }
        ResetPasswordRequest.create(request)
        SendEmail.sendResetLink(email, resetPasswordToken, res)
      }
    } catch (err) {
      res.send({ error: `An error occured trying to send the request ${err}` })
    }
  },

  async resetpw (req, res, next) {
    try {
      const resetPasswordToken = req.body.id
      const request = await ResetPasswordRequest.findOne({
        where: {
          resetPasswordToken: resetPasswordToken
        }
      })
      if (!request) {
        res.send({
          error: 'Reset password request do not exist'
        })
      } else {
        const email = request.email
        const user = await Compte.findOne({
          where: {
            email: email
          }
        })
        user.password = req.body.password
        await user.save()
        request.destroy()
        res.send({ message: 'Password updated successfully !' })
        SendEmail.sendConfirmationEmailResetpw(email, res)
      }
    } catch (err) {
      res.send({ error: `An error occured trying to reset your password ${err}` })
    }
  }
}
