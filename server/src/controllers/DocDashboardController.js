const { User } = require('../models')
const { MedicalFile } = require('../models')
const { Op } = require('sequelize')
const { Compte } = require('../models')

module.exports = {
  async recoverPatients (req, res) {
    try {
      const patients = await User.findAll({
        attributes: ['id', 'firstName', 'lastName', 'birthday', 'sexe', 'phoneNum', 'state', 'scolarYear'],
        where: {
          [Op.or]: [{ state: 'Etudiant' }, { state: 'ATS' }]
        }
      })
      res.send(patients)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the users'
      })
    }
  },

  async createMF (req, res) {
    try {
      const userId = req.body.id
      const userUser = await User.findOne({
        where: {
          id: userId
        }
      })
      const userAccount = await Compte.findOne({
        where: {
          id: userUser.idCompte
        }
      })
      const medFile = {
        email: userAccount.email,
        idUser: userId,
        personalInfoId: null,
        biometricInfoId: null,
        antecedentsInfoId: null,
        screeningInfoId: null
      }
      const userMF = await MedicalFile.create(medFile)
      const userJson = userMF.toJSON()
      res.send({ user: userJson })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to fetch the users ${err}`
      })
    }
  }
}
