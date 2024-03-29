const { User } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const users = await User.findAll({
        limit: 10
      })
      res.send(users)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the users'
      })
    }
  }
}
