const { Op } = require('sequelize')
const { User } = require('../models')
const { Compte } = require('../models')

const { MedicalFile } = require('../models')
const { PersonalInfo } = require('../models')

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

      // first : create personalInfo
      const persInfo = {
        firstName: userUser.firstName,
        lastName: userUser.lastName,
        dateOfBirth: userUser.birthday,
        placeOfBirth: null,
        sexe: userUser.sexe,
        bloodGroup: null,
        addresse: null,
        phoneNum: userUser.phoneNum,
        email: userAccount.email,
        numSS: null,
        state: userUser.state,
        scolarYear: userUser.scolarYear,
        category: null
      }
      const userPersonalInfo = await PersonalInfo.create(persInfo)

      // second : create biometricInfo

      // third : create antecedentsInfo
      

      // fourth : create screeningInfo

      // fifth : create the medicalFile
      const medFile = {
        email: userAccount.email,
        idUser: userId,
        personalInfoId: userPersonalInfo.id,
        biometricInfoId: null,
        antecedentsInfoId: null,
        screeningInfoId: null
      }
      const userMF = await MedicalFile.create(medFile)

      const mfJson = userMF.toJSON()
      const piJson = userPersonalInfo.toJSON()
      const biJson = ''
      const aiJson = ''
      const siJson = ''
      res.send({
        mf: mfJson,
        pi: piJson,
        bi: biJson,
        ai: aiJson,
        si: siJson
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to fetch the users ${err}`
      })
    }
  },

  async savePersInfo (req, res) {
    try {
      res.send({
        message: 'PersInfo'
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to fetch the users ${err}`
      })
    }
  },

  async saveBiometricInfo (req, res) {
    try {
      res.send({
        message: 'BiometricInfo'
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to fetch the users ${err}`
      })
    }
  },

  async saveAntecedentsInfo (req, res) {
    try {
      res.send({
        message: 'AntecedentsInfo'
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to fetch the users ${err}`
      })
    }
  },

  async saveScreeningInfo (req, res) {
    try {
      res.send({
        message: 'ScreeningInfo'
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to fetch the users ${err}`
      })
    }
  }
}
