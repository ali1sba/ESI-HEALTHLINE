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
      res.send({
        message: `user : ${req.body.email} \n check your email`
      })
    } catch (err) {
      res.status(400).send({ error: `This email account have problem. ${err}` })
    }
  }
}
