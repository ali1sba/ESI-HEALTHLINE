const { UserNonValide } = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await UserNonValide.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson
      })
    } catch (err) {
      res.status(400).send({ error: `This email account is already in use. ${err} ` })
    }
  },

  login (req, res) {
    res.send({
      message: `your user : ${req.body.email}  was login`
    })
  },

  resetpw (req, res) {
    res.send({
      message: `user : ${req.body.email} \n check your email`
    })
  }

}
