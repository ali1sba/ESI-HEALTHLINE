const { Compte } = require('../models')
const { Op } = require('sequelize')

module.exports = {
  async index (req, res) {
    try {
      const compte = await Compte.findAll({
        where: {
          role: {
            [Op.not]: 'ADMIN'
          }
        }
      })
      res.send(compte)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the users'
      })
    }
  }
}
