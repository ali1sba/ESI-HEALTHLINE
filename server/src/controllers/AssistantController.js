const { Op } = require('sequelize')
const { User } = require('../models')
const { Compte } = require('../models')
const { RDV } = require('../models')

module.exports = {
  async recoverPatients (req, res) {
    try {
      const cPatients = await Compte.findAll({
        where: {
          [Op.and]: [{ role: 'PATIENT' }, { state: 'ACTIVATED' }]
        }
      })
      const x = await User.findAll({
        attributes: ['id', 'lastName', 'firstName']
      })
      const patients = []
      cPatients.forEach(async element => {
        let v = element.id
        v = v - 1
        patients.push(x[(v)].dataValues)
      })

      console.log(patients)
      res.send({ patients: patients })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to recoverPatients for Assistant ${err}`
      })
    }
  },

  async recoverRDVI (req, res) {
    try {
      const rdv = await RDV.findAll()
      // const user = await User.findAll()
      const rdvSent = []
      for (let i = 0; i < rdv.length; i++) {
        const idUser = rdv[(i)].idUser
        const user = await User.findOne({
          where: {
            id: idUser
          }
        })
        rdvSent.push({ idRDV: rdv[(i)].id, Patient: user.dataValues.lastName + ' ' + user.dataValues.firstName, DateAndTime: rdv[(i)].DateAndTime, Type: rdv[(i)].Type, Note: rdv[(i)].Note })
      }
      res.send({
        message: 'response from the server to recoverRDVI for Assistant',
        rdv: rdvSent
      })
    } catch (err) {
      res.send({
        error: `an error has occured trying to recoverRDVI for Assistant ${err}`
      })
    }
  },

  async progRDVIndividuel (req, res) {
    try {
      const rdv = req.body.rdv
      const RDVToSave = {
        idUser: rdv.idPatient,
        DateAndTime: rdv.date,
        Type: rdv.typeRDV,
        Note: rdv.note
      }
      const RDVsaved = await RDV.create(RDVToSave)
      res.send({
        message: `response from the server to progRDVIndividuel for Assistant rdv :  ${rdv.idPatient}`,
        RDV: RDVsaved
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to progRDVIndividuel for Assistant : ${err} `
      })
    }
  },

  async annulerRDVIndiv (req, res) {
    try {
      const idRDV = req.body.idRDV
      const rdv = await RDV.findOne({
        where: {
          id: idRDV
        }
      })
      await rdv.destroy()
      res.send({
        message: `response from the server to annulerRDVIndiv for Assistant idRDV :  ${idRDV}`
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to annulerRDVIndiv for Assistant : ${err} `
      })
    }
  },

  async confirmModifRDVIndividuel (req, res) {
    try {
      const rdv = req.body.rdv
      const rdvToModify = await RDV.findOne({
        where: {
          id: rdv.idRDV
        }
      })
      rdvToModify.Type = rdv.Type
      rdvToModify.DateAndTime = rdv.DateAndTime
      rdvToModify.Note = rdv.Note
      await rdvToModify.save()
      res.send({
        message: `response from the server to confirmModifRDVIndividuel for Assistant idRDV :  ${rdv.idRDV}`
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to confirmModifRDVIndividuel for Assistant : ${err} `
      })
    }
  }
}
