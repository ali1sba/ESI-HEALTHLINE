const { UserNonValide } = require('../models')
const { Compte } = require('../models')
const { User } = require('../models')
module.exports = {
  async validateUser (req, res) {
    try {
      const { email } = req.body
      const user = await UserNonValide.findOne({
        where: {
          email: email
        }
      })

      const userAccount = await Compte.create({
        email: user.email,
        password: user.password,
        role: 'PATIENT',
        state: 'ACTIVATED'
      })

      const userUser = await User.create({
        firstName: user.firstName,
        lastName: user.lastName,
        birthday: user.birthday,
        sexe: user.sexe,
        phoneNum: user.phoneNum,
        state: user.state,
        scolarYear: user.scolarYear,
        idCompte: userAccount.id
      })

      await user.destroy()

      const userJson = userUser.toJSON()
      res.send({
        user: userJson
        // message: `user : ${userJson} hello`
      })
    } catch (err) {
      res.status(400).send({ error: `This email account have problem. ${err}` })
    }
  },

  async deleteUser (req, res) {
    try {
      res.send({
        message: `user : ${req.body.email} \n check your email`
      })
    } catch (err) {
      res.status(400).send({ error: `This email account have problem. ${err}` })
    }
  },

  async desactivateUser (req, res) {
    try {
      const { idcmpt } = req.body
      const user = await Compte.findOne({
        where: {
          id: idcmpt
        }
      })

      user.state = 'DISACTIVATED'

      await user.save()

      res.send({
        message: `user : ${req.body.email} \n check your email`
      })
    } catch (err) {
      res.status(400).send({ error: `This email account have problem. ${err}` })
    }
  },
  async activateUser (req, res) {
    try {
      const { idcmpt } = req.body
      const user = await Compte.findOne({
        where: {
          id: idcmpt
        }
      })

      user.state = 'ACTIVATED'

      await user.save()

      res.send({
        message: `user : ${req.body.email} \n check your email`
      })
    } catch (err) {
      res.status(400).send({ error: `This email account have problem. ${err}` })
    }
  },
  async adminRegister (req, res) {
    try {
      const user = req.body

      const userAccount = await Compte.create({
        email: user.email,
        password: user.password,
        role: user.role,
        state: 'ACTIVATED'
      })

      const userUser = await User.create({
        firstName: user.firstName,
        lastName: user.lastName,
        birthday: user.birthday,
        sexe: user.sexe,
        phoneNum: user.phoneNum,
        state: user.state,
        scolarYear: user.scolarYear,
        idCompte: userAccount.id
      })

      const userJson = userUser.toJSON()
      res.send({
        user: userJson
        // message: `user : ${userJson} hello`
      })
    } catch (err) {
      res.status(400).send({ error: `This email account have problem. ${err}` })
    }
  }
}
