const { Op } = require('sequelize')
const { User } = require('../models')
const { Compte } = require('../models')

const { MedicalFile } = require('../models')
const { PersonalInfo } = require('../models')

module.exports = {
  async recoverPatients (req, res) {
    try {
      const patients = await User.findAll({
        attributes: ['id', 'firstName', 'lastName', 'state', 'scolarYear'],
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

  async showPatient (req, res) {
    try {
      const userId = req.body.id
      const userUser = await MedicalFile.findOne({
        where: {
          id: userId
        }
      })
      if (!userUser) {
        res.send({
          message: "Ce patient n'a aucun dossier médical dans le système"
        })
      } else {
        const userPI = await PersonalInfo.findOne({
          where: {
            id: userUser.personalInfoId
          }
        })
        // here we add userBI, userAI and userDI // same thing with ExamenMedical, RDV and statistics
        const medFile = {
          personalInfo: {
            firstName: userPI.firstName,
            lastName: userPI.lastName,
            dateOfBirth: userPI.dateOfBirth,
            placeOfBirth: userPI.placeOfBirth,
            sexe: userPI.sexe,
            bloodGroup: userPI.bloodGroup,
            addresse: userPI.addresse,
            phoneNum: userPI.phoneNum,
            email: userPI.email,
            numSS: userPI.numSS,
            state: userPI.state,
            scolarYear: userPI.scolarYear,
            category: userPI.category
          }
          // here we add bioInfo, antecedentInfo and depistageInfo // same thing with ExamenMedical, RDV and statistics
        }
        res.send({
          medFile: medFile
        })
      }
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to showPatient ${err}`
      })
    }
  },

  async savePersInfo (req, res) {
    try {
      const userPI = req.body.personalInfo
      // update the tables with save function of sequelize
      res.send({
        message: `PersInfo successfully updated... ${userPI.firstName}`
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to savePersInfo the users ${err}`
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
