const { Op } = require('sequelize')
const { User } = require('../models')
const { Compte } = require('../models')

const { MedicalFile } = require('../models')
const { PersonalInfo } = require('../models')
const { biometricInfo } = require('../models')

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
      const biomInfo = {
        taille: null,
        poids: null,
        imc: null
      }
      const userBiometricInfo = await biometricInfo.create(biomInfo)
      // third : create antecedentsInfo

      // fourth : create screeningInfo

      // fifth : create the medicalFile
      const medFile = {
        email: userAccount.email,
        idUser: userId,
        personalInfoId: userPersonalInfo.id,
        biometricInfoId: userBiometricInfo.id,
        antecedentsInfoId: null,
        screeningInfoId: null
      }
      const userMF = await MedicalFile.create(medFile)

      const mfJson = userMF.toJSON()
      const piJson = userPersonalInfo.toJSON()
      const biJson = userBiometricInfo.toJSON()
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
        error: `an error has occured trying to create the users MF ${err}`
      })
    }
  },

  async showPatient (req, res) {
    try {
      const userId = req.body.id
      const userMF = await MedicalFile.findOne({
        where: {
          idUser: userId
        }
      })
      if (!userMF) {
        const userUser = await User.findOne({
          where: {
            id: userId
          }
        })
        const medFile = {
          haveDM: false,
          personalInfo: {
            idUser: userId,
            idPI: null,
            firstName: userUser.firstName,
            lastName: userUser.lastName,
            dateOfBirth: userUser.birthday,
            placeOfBirth: null,
            sexe: userUser.sexe,
            bloodGroup: null,
            addresse: null,
            phoneNum: userUser.phoneNum,
            email: null,
            numSS: null,
            state: userUser.state,
            scolarYear: userUser.scolarYear,
            category: null
          },
          biometricInfo: {
            poids: null,
            taille: null,
            imc: null
          }
          // here we add bioInfo, antecedentInfo and depistageInfo // same thing with ExamenMedical, RDV and statistics
        }
        res.send({
          medFile: medFile
        })
      } else {
        const userPI = await PersonalInfo.findOne({
          where: {
            id: userMF.personalInfoId
          }
        })
        const userBI = await biometricInfo.findOne({
          where: {
            id: userMF.biometricInfoId
          }
        })
        // here we add userBI, userAI and userDI // same thing with ExamenMedical, RDV and statistics
        const medFile = {
          haveDM: true,
          personalInfo: {
            idUser: userId,
            idPI: userPI.id,
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
          },
          biometricInfo: {
            id: userBI.id,
            poids: userBI.poids,
            taille: userBI.taille,
            imc: userBI.imc
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
      const userUser = await User.findOne({
        where: {
          id: userPI.idUser
        }
      })
      const userPersonalInfo = await PersonalInfo.findOne({
        where: {
          id: userPI.idPI
        }
      })
      // save changes in Users table
      userUser.firstName = userPI.firstName
      userUser.lastName = userPI.lastName
      userUser.birthday = userPI.dateOfBirth
      userUser.sexe = userPI.sexe
      userUser.phoneNum = userPI.phoneNum
      userUser.state = userPI.state
      userUser.scolarYear = userPI.scolarYear
      await userUser.save()
      // save changes in PersonalInfos table
      userPersonalInfo.firstName = userPI.firstName
      userPersonalInfo.lastName = userPI.lastName
      userPersonalInfo.dateOfBirth = userPI.dateOfBirth
      userPersonalInfo.placeOfBirth = userPI.placeOfBirth
      userPersonalInfo.sexe = userPI.sexe
      userPersonalInfo.bloodGroup = userPI.bloodGroup
      userPersonalInfo.addresse = userPI.addresse
      userPersonalInfo.phoneNum = userPI.phoneNum
      userPersonalInfo.numSS = userPI.numSS
      userPersonalInfo.state = userPI.state
      userPersonalInfo.scolarYear = userPI.scolarYear
      userPersonalInfo.category = userPI.category
      await userPersonalInfo.save()
      res.send({
        message: `PersInfo successfully updated... dateOfBirth: ${userPI.dateOfBirth}`
      })
    } catch (err) {
      res.send({
        error: `an error has occured trying to savePersInfo the users ${err}`
      })
    }
  },

  async saveBiometricInfo (req, res) {
    try {
      const userBI = req.body.biometricInfo
      // update the tables with save function of sequelize
      const userBiometricInfo = await biometricInfo.findOne({
        where: {
          id: userBI.id
        }
      })
      // save changes in PersonalInfos table
      userBiometricInfo.poids = userBI.poids
      userBiometricInfo.poids = userBI.poids
      userBiometricInfo.imc = userBI.poids
      await userBiometricInfo.save()
      res.send({
        message: `BIOMInfo successfully updated... dateOfBirth: ${userBI.poids}`
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
