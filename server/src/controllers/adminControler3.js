const { Compte } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const compte = await Compte.findAll({
      })
      res.send(compte)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the users'
      })
    }
  }
}
