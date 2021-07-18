const { UserNonValide } = require('../models')
const { User } = require('../models')
module.exports = {
  async valider (req, res) {
    try {
      const { email } = req.body
      const user = await UserNonValide.findOne({
        where: {
          email: email
        }
      })
      const uservalider = await User.create(user.toJSON())
      // const userJson = uservalider.toJSON()
      res.send({
        // user: userJson
        message: `user : ${uservalider} hello`
      })
    } catch (err) {
      res.status(400).send({ error: `This email account have problem. ${err}` })
    }
  },

  async delate (req, res) {
    try {
      res.send({
        message: `user : ${req.body.email} \n check your email`
      })
    } catch (err) {
      res.status(400).send({ error: `This email account have problem. ${err}` })
    }
  },

  async disactiver (req, res) {
    try {
      res.send({
        message: `user : ${req.body.email} \n check your email`
      })
    } catch (err) {
      res.status(400).send({ error: `This email account have problem. ${err}` })
    }
  }
}
