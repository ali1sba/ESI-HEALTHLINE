const { Op } = require('sequelize')
const { User } = require('../models')
const { Compte } = require('../models')

const { MedicalFile } = require('../models')
const { PersonalInfo } = require('../models')
const { BiometricInfo } = require('../models')
const { AntecedentsInfo } = require('../models')
const { Depistage } = require('../models')

// Bilans paracliniques
// Bilans Biologiques
const { BilansBiologique } = require('../models')
const { BilansBCardiaque } = require('../models')
const { BilansBGlycemique } = require('../models')
const { BilansBHepathique } = require('../models')
const { BilansBHormonal } = require('../models')
const { BilansBInflammatoire } = require('../models')
const { BilansBIonogramme } = require('../models')
const { BilansBLipidique } = require('../models')
const { BilansBNFS } = require('../models')
const { BilansBRenale } = require('../models')
const { BilansBSerologie } = require('../models')
const { BilansBUrinaire } = require('../models')

module.exports = {
  async recoverPatients (req, res) {
    try {
      const cPatients = await Compte.findAll({
        where: {
          [Op.and]: [{ role: 'PATIENT' }, { state: 'ACTIVATED' }]
        }
      })
      const x = await User.findAll({
      })

      const patients = [{}]
      cPatients.forEach(async element => {
        let v = element.id
        v = v - 1
        patients.push(x[(v)].dataValues)
      })
      // const patients = await User.findAll({
      //   attributes: ['id', 'firstName', 'lastName', 'state', 'scolarYear'],
      //   where: {
      //     [Op.or]: [{ state: 'Etudiant' }]
      //   }
      // })
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
        scolarYear: userUser.scolarYear,
        category: userUser.state
      }
      const userPersonalInfo = await PersonalInfo.create(persInfo)

      // second : create biometricInfo
      const biomInfo = {
        taille: null,
        poids: null,
        imc: null
      }
      const userBiometricInfo = await BiometricInfo.create(biomInfo)

      // third : create antecedentsInfo
      const antInfo = {
        boolFumer: null,
        boolChiquer: null,
        boolPrise: null,
        ancienFum: null,
        nbrFumer: null,
        nbrChiquer: null,
        nbrPrise: null,
        perExpo: null,
        alcool: null,
        medicat: null,
        autres: null,
        affec: null,
        malaGene: null,
        intChiru: null,
        reactMed: null
      }
      const antecedentsInfoList = await AntecedentsInfo.create(antInfo)

      // fourth : create screeningInfo
      const DepistageInfo = {
        typeDeVisite: null,
        docteurName: null,
        poids: null,
        taille: null,
        DépistageDate1: null,
        auditionOD: null,
        auditionOG: null,
        AcuiteVisuelleSansCOD: null,
        AcuiteVisuelleSansCOG: null,
        AcuiteVisuelleAvecCOD: null,
        AcuiteVisuelleAvecCOG: null,
        checkedDouleurs: 'false',
        textarea1: null,
        textarea2: null,
        textarea3: null,
        textarea4: null,
        textarea5: null,
        textarea6: null,
        CVPouls: null,
        CVTa: null,
        CVCyanose: null,
        DigestifDentureCarie: null,
        DigestifGingivopatie: null,
        Digestifabdomens: null,
        DigestifHernie: null,
        DigestifFoie: null,
        DigestifAppétit: null,
        DigestifTransit: null,
        DigestifSelles: null,
        DigestifRectorragies: null,
        DigestifDouleurAbdominales: null,
        checkLarmoiement: 'false',
        checkDouleurs: 'false',
        checkTachesdevantlesyeux: 'false',
        checksifflements: 'false',
        checkAnginesrépétées: 'false',
        checkEpistaxis: 'false',
        checkRhinorhée: 'false',
        checkMusculaire: 'false',
        checkArticulaire: 'false',
        checkvertébraire: 'false',
        checkNeurologique: 'false',
        checkToux: 'false',
        checkDyspneenacturne: 'false',
        checkDyspneedlurne: 'false',
        checkExpectorations: 'false',
        checkOedémes: 'false',
        checkAlamarchecv: 'false',
        checkaurepos: 'false',
        checkAlefforts: 'false',
        checkPermanents: 'false',
        checkpalpitation: 'false',
        checkObésitéfamiliales: 'false',
        checkAlamarche: 'false',
        checkEcchymoses: 'false',
        checkTendancesauxhémorragies: 'false',
        DigestifAutres: null,
        DigestifPyrosis: 'false',
        DigestifVomissements: 'false',
        checkDigestifAppétit: 'false',
        checkDigestifTransit: 'false',
        checkDigestifSelles: 'false',
        checkDigestifRectorragies: 'false',
        checkDigestifDouleurAbdominales: 'false',
        checkDigestifAutres: 'false',
        HematologiquePétéchies: null,
        HematologiquePurpura: null,
        HematologiqueRate: null,
        HematologiqueCervicaux: null,
        HematologiqueSsAuxillaires: null,
        HematologiqueSsClaviculaires: null,
        HematologiqueIngionaux: null,
        EndocrinologieTyroide: null,
        EndocrinologieTesticules: null,
        EndocrinologieGlandesMammaires: null,
        PsychoInterrogatoire: null,
        PsychoExamensClinique: null
      }
      const depistageInformation = await Depistage.create(DepistageInfo)
      // fifth : create the medicalFile
      const medFile = {
        email: userAccount.email,
        idUser: userId,
        personalInfoId: userPersonalInfo.id,
        biometricInfoId: userBiometricInfo.id,
        antecedentsInfoId: antecedentsInfoList.id,
        screeningInfoId: depistageInformation.id
      }
      const userMF = await MedicalFile.create(medFile)

      // const mfJson = userMF.toJSON()
      const piJson = userPersonalInfo.toJSON()
      const biJson = userBiometricInfo.toJSON()
      const aiJson = antecedentsInfoList.toJSON()
      const siJson = depistageInformation.toJSON()
      res.send({
        mf: userMF,
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
            scolarYear: userUser.scolarYear,
            category: userUser.state
          },
          biometricInfo: {
            poids: null,
            taille: null,
            imc: null
          },
          antecedentsInfo: {
            idAI: null,
            boolFumer: '',
            boolChiquer: '',
            boolPrise: '',
            ancienFum: '',
            nbrFumer: '',
            nbrChiquer: '',
            nbrPrise: '',
            perExpo: '',
            alcool: '',
            medicat: '',
            autres: '',
            affec: '',
            malaGene: '',
            intChiru: '',
            reactMed: ''
          },
          depistagelInfo: {
            idDI: null,
            typeDeVisite: '',
            docteurName: '',
            poids: '',
            taille: '',
            DépistageDate1: '',
            auditionOD: '',
            auditionOG: '',
            AcuiteVisuelleSansCOD: '',
            AcuiteVisuelleSansCOG: '',
            AcuiteVisuelleAvecCOD: '',
            AcuiteVisuelleAvecCOG: '',
            checkedDouleurs: 'false',
            textarea1: '',
            textarea2: '',
            textarea3: '',
            textarea4: '',
            textarea5: '',
            textarea6: '',
            CVPouls: '',
            CVTa: '',
            CVCyanose: '',
            checkListOphtalmolodique: [''],
            checkListORL: [''],
            checkListLocomoteur: [''],
            checkListRespiratoire: [''],
            checkListCardioVasculaire: [''],
            DigestifDentureCarie: '',
            DigestifGingivopatie: '',
            Digestifabdomens: '',
            DigestifHernie: '',
            DigestifFoie: '',
            DigestifAppétit: '',
            DigestifTransit: '',
            DigestifSelles: '',
            DigestifRectorragies: '',
            DigestifDouleurAbdominales: '',
            checkLarmoiement: 'false',
            checkDouleurs: 'false',
            checkTachesdevantlesyeux: 'false',
            checksifflements: 'false',
            checkAnginesrépétées: 'false',
            checkEpistaxis: 'false',
            checkRhinorhée: 'false',
            checkMusculaire: 'false',
            checkArticulaire: 'false',
            checkvertébraire: 'false',
            checkNeurologique: 'false',
            checkToux: 'false',
            checkDyspneenacturne: 'false',
            checkDyspneedlurne: 'false',
            checkExpectorations: 'false',
            checkOedémes: 'false',
            checkAlamarchecv: 'false',
            checkaurepos: 'false',
            checkAlefforts: 'false',
            checkPermanents: 'false',
            checkpalpitation: 'false',
            checkObésitéfamiliales: 'false',
            checkAlamarche: 'false',
            checkEcchymoses: 'false',
            checkTendancesauxhémorragies: 'false',
            DigestifAutres: '',
            DigestifPyrosis: 'false',
            DigestifVomissements: 'false',
            checkDigestifAppétit: 'false',
            checkDigestifTransit: 'false',
            checkDigestifSelles: 'false',
            checkDigestifRectorragies: 'false',
            checkDigestifDouleurAbdominales: 'false',
            checkDigestifAutres: 'false',
            checkListHematologique: [''],
            HematologiquePétéchies: '',
            HematologiquePurpura: '',
            HematologiqueRate: '',
            HematologiqueCervicaux: '',
            HematologiqueSsAuxillaires: '',
            HematologiqueSsClaviculaires: '',
            HematologiqueIngionaux: '',
            checkListEndocrinologie: [''],
            EndocrinologieTyroide: '',
            EndocrinologieTesticules: '',
            EndocrinologieGlandesMammaires: '',
            PsychoInterrogatoire: '',
            PsychoExamensClinique: ''
          }

        }
        res.send({
          medFile: medFile
        })
      } else {
        // find PersonalInfo record by id
        const userPI = await PersonalInfo.findOne({
          where: {
            id: userMF.personalInfoId
          }
        })
        // find biometricInfo record by id
        const userBI = await BiometricInfo.findOne({
          where: {
            id: userMF.biometricInfoId
          }
        })
        // find antecedentsInfo record by id
        const userAI = await AntecedentsInfo.findOne({
          where: {
            id: userMF.antecedentsInfoId
          }
        })
        // find depistage record by id
        const userDepInfo = await Depistage.findOne({
          where: {
            id: userMF.screeningInfoId
          }
        })
        // here we add userBI, userAI and userDI to the medical file // same thing with ExamenMedical, RDV and statistics
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
            scolarYear: userPI.scolarYear,
            category: userPI.category
          },

          biometricInfo: {
            id: userBI.id,
            poids: userBI.poids,
            taille: userBI.taille,
            imc: userBI.imc
          },
          antecedentsInfo: {
            idAI: userAI.id,
            boolFumer: userAI.boolFumer,
            boolChiquer: userAI.boolChiquer,
            boolPrise: userAI.boolPrise,
            ancienFum: userAI.ancienFum,
            nbrFumer: userAI.nbrFumer,
            nbrChiquer: userAI.nbrChiquer,
            nbrPrise: userAI.nbrPrise,
            perExpo: userAI.perExpo,
            alcool: userAI.alcool,
            medicat: userAI.medicat,
            autres: userAI.autres,
            affec: userAI.affec,
            malaGene: userAI.malaGene,
            intChiru: userAI.intChiru,
            reactMed: userAI.reactMed
          },
          depistagelInfo: {
            idDI: userDepInfo.id,
            typeDeVisite: userDepInfo.typeDeVisite,
            docteurName: userDepInfo.docteurName,
            poids: userDepInfo.poids,
            taille: userDepInfo.taille,
            DépistageDate1: userDepInfo.DépistageDate1,
            auditionOD: userDepInfo.auditionOD,
            auditionOG: userDepInfo.auditionOG,
            AcuiteVisuelleSansCOD: userDepInfo.AcuiteVisuelleSansCOD,
            AcuiteVisuelleSansCOG: userDepInfo.AcuiteVisuelleSansCOG,
            AcuiteVisuelleAvecCOD: userDepInfo.AcuiteVisuelleAvecCOD,
            AcuiteVisuelleAvecCOG: userDepInfo.AcuiteVisuelleAvecCOG,
            checkedDouleurs: userDepInfo.checkedDouleurs,
            textarea1: userDepInfo.textarea1,
            textarea2: userDepInfo.textarea2,
            textarea3: userDepInfo.textarea3,
            textarea4: userDepInfo.textarea4,
            textarea5: userDepInfo.textarea5,
            textarea6: userDepInfo.textarea6,
            CVPouls: userDepInfo.CVPouls,
            CVTa: userDepInfo.CVTa,
            CVCyanose: userDepInfo.CVCyanose,
            checkListOphtalmolodique: userDepInfo.checkListOphtalmolodique,
            checkListORL: userDepInfo.checkListORL,
            checkListLocomoteur: userDepInfo.checkListLocomoteur,
            checkListRespiratoire: userDepInfo.checkListRespiratoire,
            checkListCardioVasculaire: userDepInfo.checkListCardioVasculaire,
            DigestifDentureCarie: userDepInfo.DigestifDentureCarie,
            DigestifGingivopatie: userDepInfo.DigestifGingivopatie,
            Digestifabdomens: userDepInfo.Digestifabdomens,
            DigestifHernie: userDepInfo.DigestifHernie,
            DigestifFoie: userDepInfo.DigestifFoie,
            DigestifAppétit: userDepInfo.DigestifAppétit,
            DigestifTransit: userDepInfo.DigestifTransit,
            DigestifSelles: userDepInfo.DigestifSelles,
            DigestifRectorragies: userDepInfo.DigestifRectorragies,
            DigestifDouleurAbdominales: userDepInfo.DigestifDouleurAbdominales,
            DigestifAutres: userDepInfo.DigestifAutres,
            checkLarmoiement: userDepInfo.checkLarmoiement,
            checkDouleurs: userDepInfo.checkDouleurs,
            checkTachesdevantlesyeux: userDepInfo.checkTachesdevantlesyeux,
            checksifflements: userDepInfo.checksifflements,
            checkAnginesrépétées: userDepInfo.checkAnginesrépétées,
            checkEpistaxis: userDepInfo.checkEpistaxis,
            checkRhinorhée: userDepInfo.checkRhinorhée,
            checkMusculaire: userDepInfo.checkMusculaire,
            checkArticulaire: userDepInfo.checkArticulaire,
            checkvertébraire: userDepInfo.checkvertébraire,
            checkNeurologique: userDepInfo.checkNeurologique,
            checkToux: userDepInfo.checkToux,
            checkDyspneenacturne: userDepInfo.checkDyspneenacturne,
            checkDyspneedlurne: userDepInfo.checkDyspneedlurne,
            checkExpectorations: userDepInfo.checkExpectorations,
            checkOedémes: userDepInfo.checkOedémes,
            checkAlamarchecv: userDepInfo.checkAlamarchecv,
            checkaurepos: userDepInfo.checkaurepos,
            checkAlefforts: userDepInfo.checkAlefforts,
            checkPermanents: userDepInfo.checkPermanents,
            checkpalpitation: userDepInfo.checkpalpitation,
            checkObésitéfamiliales: userDepInfo.checkObésitéfamiliales,
            checkAlamarche: userDepInfo.checkAlamarche,
            checkEcchymoses: userDepInfo.checkEcchymoses,
            checkTendancesauxhémorragies: userDepInfo.checkTendancesauxhémorragies,
            DigestifPyrosis: userDepInfo.DigestifPyrosis,
            DigestifVomissements: userDepInfo.DigestifVomissements,
            checkDigestifAppétit: userDepInfo.checkDigestifAppétit,
            checkDigestifTransit: userDepInfo.checkDigestifTransit,
            checkDigestifSelles: userDepInfo.checkDigestifSelles,
            checkDigestifRectorragies: userDepInfo.checkDigestifRectorragies,
            checkDigestifDouleurAbdominales: userDepInfo.checkDigestifDouleurAbdominales,
            checkDigestifAutres: userDepInfo.checkDigestifAutres,
            checkListHematologique: userDepInfo.checkListHematologique,
            HematologiquePétéchies: userDepInfo.HematologiquePétéchies,
            HematologiquePurpura: userDepInfo.HematologiquePurpura,
            HematologiqueRate: userDepInfo.HematologiqueRate,
            HematologiqueCervicaux: userDepInfo.HematologiqueCervicaux,
            HematologiqueSsAuxillaires: userDepInfo.HematologiqueSsAuxillaires,
            HematologiqueSsClaviculaires: userDepInfo.HematologiqueSsClaviculaires,
            HematologiqueIngionaux: userDepInfo.HematologiqueIngionaux,
            checkListEndocrinologie: userDepInfo.checkListEndocrinologie,
            EndocrinologieTyroide: userDepInfo.EndocrinologieTyroide,
            EndocrinologieTesticules: userDepInfo.EndocrinologieTesticules,
            EndocrinologieGlandesMammaires: userDepInfo.EndocrinologieGlandesMammaires,
            PsychoInterrogatoire: userDepInfo.PsychoInterrogatoire,
            PsychoExamensClinique: userDepInfo.PsychoExamensClinique
          }
          // here we add bioInfo, antecedentInfo and depistageInfo // same thing with ExamenMedical, RDV and statistics
        }
        res.send({
          medFile: medFile
        })
      }
    } catch (err) {
      res.send({
        error: `an error has occured trying to showPatient ${err}`
      })
    }
  },

  async savePersInfo (req, res) {
    try {
      const userPI = req.body.personalInfo
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
      // update the tables with save function of sequelize
      // save changes in Users table
      userUser.firstName = userPI.firstName
      userUser.lastName = userPI.lastName
      userUser.birthday = userPI.dateOfBirth
      userUser.sexe = userPI.sexe
      userUser.phoneNum = userPI.phoneNum
      userUser.state = userPI.category
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
      const userBiometricInfo = await BiometricInfo.findOne({
        where: {
          id: userBI.id
        }
      })
      // save changes in biometricinfos table
      userBiometricInfo.poids = userBI.poids
      userBiometricInfo.taille = userBI.taille
      userBiometricInfo.imc = userBI.imc
      await userBiometricInfo.save()
      res.send({
        message: ` successfully updated... : ${userBI.poids}`
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to fetch the users ${err}`
      })
    }
  },

  async saveAntecedentsInfo (req, res) {
    try {
      const userAI = req.body.antInfo
      const userAntInfo = await AntecedentsInfo.findOne({
        where: {
          id: userAI.idAI
        }
      })

      // save changes in antecedents table
      userAntInfo.boolFumer = userAI.boolFumer
      userAntInfo.boolChiquer = userAI.boolChiquer
      userAntInfo.boolPrise = userAI.boolPrise
      userAntInfo.ancienFum = userAI.ancienFum
      userAntInfo.nbrFumer = userAI.nbrFumer
      userAntInfo.nbrChiquer = userAI.nbrChiquer
      userAntInfo.nbrPrise = userAI.nbrPrise
      userAntInfo.perExpo = userAI.perExpo
      userAntInfo.alcool = userAI.alcool
      userAntInfo.medicat = userAI.medicat
      userAntInfo.autres = userAI.autres
      userAntInfo.affec = userAI.affec
      userAntInfo.malaGene = userAI.malaGene
      userAntInfo.intChiru = userAI.intChiru
      userAntInfo.reactMed = userAI.reactMed

      await userAntInfo.save()
      res.send({
        message: `antecedents successfully updated..medicaments: ${userAI.medicat}`
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to fetch the users ${err}`
      })
    }
  },

  async saveScreeningInfo (req, res) {
    try {
      const userDI = req.body.DepistageInfo
      const userdepistagelInfo = await Depistage.findOne({
        where: {
          id: userDI.idDI
        }
      })

      // save changes in depistage table
      userdepistagelInfo.typeDeVisite = userDI.typeDeVisite
      userdepistagelInfo.docteurName = userDI.docteurName
      userdepistagelInfo.poids = userDI.poids
      userdepistagelInfo.taille = userDI.taille
      userdepistagelInfo.DépistageDate1 = userDI.DépistageDate1
      userdepistagelInfo.auditionOD = userDI.auditionOD
      userdepistagelInfo.auditionOG = userDI.auditionOG
      userdepistagelInfo.AcuiteVisuelleSansCOD = userDI.AcuiteVisuelleSansCOD
      userdepistagelInfo.AcuiteVisuelleSansCOG = userDI.AcuiteVisuelleSansCOG
      userdepistagelInfo.AcuiteVisuelleAvecCOD = userDI.AcuiteVisuelleAvecCOD
      userdepistagelInfo.AcuiteVisuelleAvecCOG = userDI.AcuiteVisuelleAvecCOG
      userdepistagelInfo.checkedDouleurs = userDI.checkedDouleurs
      userdepistagelInfo.textarea1 = userDI.textarea1
      userdepistagelInfo.textarea2 = userDI.textarea2
      userdepistagelInfo.textarea3 = userDI.textarea3
      userdepistagelInfo.textarea4 = userDI.textarea4
      userdepistagelInfo.textarea5 = userDI.textarea5
      userdepistagelInfo.textarea6 = userDI.textarea6
      userdepistagelInfo.CVPouls = userDI.CVPouls
      userdepistagelInfo.CVTa = userDI.CVTa
      userdepistagelInfo.CVCyanose = userDI.CVCyanose
      userdepistagelInfo.checkListOphtalmolodique = userDI.checkListOphtalmolodique
      userdepistagelInfo.checkListORL = userDI.checkListORL
      userdepistagelInfo.checkListLocomoteur = userDI.checkListLocomoteur
      userdepistagelInfo.checkListRespiratoire = userDI.checkListRespiratoire
      userdepistagelInfo.checkListCardioVasculaire = userDI.checkListCardioVasculaire
      userdepistagelInfo.DigestifDentureCarie = userDI.DigestifDentureCarie
      userdepistagelInfo.DigestifGingivopatie = userDI.DigestifGingivopatie
      userdepistagelInfo.Digestifabdomens = userDI.Digestifabdomens
      userdepistagelInfo.DigestifHernie = userDI.DigestifHernie
      userdepistagelInfo.DigestifFoie = userDI.DigestifFoie
      userdepistagelInfo.DigestifAppétit = userDI.DigestifAppétit
      userdepistagelInfo.DigestifTransit = userDI.DigestifTransit
      userdepistagelInfo.DigestifSelles = userDI.DigestifSelles
      userdepistagelInfo.DigestifRectorragies = userDI.DigestifRectorragies
      userdepistagelInfo.DigestifDouleurAbdominales = userDI.DigestifDouleurAbdominales
      userdepistagelInfo.checkLarmoiement = userDI.checkLarmoiement
      userdepistagelInfo.checkDouleurs = userDI.checkDouleurs
      userdepistagelInfo.checkTachesdevantlesyeux = userDI.checkTachesdevantlesyeux
      userdepistagelInfo.checksifflements = userDI.checksifflements
      userdepistagelInfo.checkAnginesrépétées = userDI.checkAnginesrépétées
      userdepistagelInfo.checkEpistaxis = userDI.checkEpistaxis
      userdepistagelInfo.checkRhinorhée = userDI.checkRhinorhée
      userdepistagelInfo.checkMusculaire = userDI.checkMusculaire
      userdepistagelInfo.checkArticulaire = userDI.checkArticulaire
      userdepistagelInfo.checkvertébraire = userDI.checkvertébraire
      userdepistagelInfo.checkNeurologique = userDI.checkNeurologique
      userdepistagelInfo.checkToux = userDI.checkToux
      userdepistagelInfo.checkDyspneenacturne = userDI.checkDyspneenacturne
      userdepistagelInfo.checkDyspneedlurne = userDI.checkDyspneedlurne
      userdepistagelInfo.checkExpectorations = userDI.checkExpectorations
      userdepistagelInfo.checkOedémes = userDI.checkOedémes
      userdepistagelInfo.checkAlamarchecv = userDI.checkAlamarchecv
      userdepistagelInfo.checkaurepos = userDI.checkaurepos
      userdepistagelInfo.checkAlefforts = userDI.checkAlefforts
      userdepistagelInfo.checkPermanents = userDI.checkPermanents
      userdepistagelInfo.checkpalpitation = userDI.checkpalpitation
      userdepistagelInfo.checkObésitéfamiliales = userDI.checkObésitéfamiliales
      userdepistagelInfo.checkAlamarche = userDI.checkAlamarche
      userdepistagelInfo.checkEcchymoses = userDI.checkEcchymoses
      userdepistagelInfo.checkTendancesauxhémorragies = userDI.checkTendancesauxhémorragies
      userdepistagelInfo.DigestifAutres = userDI.DigestifAutres
      userdepistagelInfo.DigestifPyrosis = userDI.DigestifPyrosis
      userdepistagelInfo.DigestifVomissements = userDI.DigestifVomissements
      userdepistagelInfo.checkDigestifAppétit = userDI.checkDigestifAppétit
      userdepistagelInfo.checkDigestifTransit = userDI.checkDigestifTransit
      userdepistagelInfo.checkDigestifSelles = userDI.checkDigestifSelles
      userdepistagelInfo.checkDigestifRectorragies = userDI.checkDigestifRectorragies
      userdepistagelInfo.checkDigestifDouleurAbdominales = userDI.checkDigestifDouleurAbdominales
      userdepistagelInfo.checkDigestifAutres = userDI.checkDigestifAutres
      userdepistagelInfo.checkListHematologique = userDI.checkListHematologique
      userdepistagelInfo.HematologiquePétéchies = userDI.HematologiquePétéchies
      userdepistagelInfo.HematologiquePurpura = userDI.HematologiquePurpura
      userdepistagelInfo.HematologiqueRate = userDI.HematologiqueRate
      userdepistagelInfo.HematologiqueCervicaux = userDI.HematologiqueCervicaux
      userdepistagelInfo.HematologiqueSsAuxillaires = userDI.HematologiqueSsAuxillaires
      userdepistagelInfo.HematologiqueSsClaviculaires = userDI.HematologiqueSsClaviculaires
      userdepistagelInfo.HematologiqueIngionaux = userDI.HematologiqueIngionaux
      userdepistagelInfo.checkListEndocrinologie = userDI.checkListEndocrinologie
      userdepistagelInfo.EndocrinologieTyroide = userDI.EndocrinologieTyroide
      userdepistagelInfo.EndocrinologieTesticules = userDI.EndocrinologieTesticules
      userdepistagelInfo.EndocrinologieGlandesMammaires = userDI.EndocrinologieGlandesMammaires
      userdepistagelInfo.PsychoInterrogatoire = userDI.PsychoInterrogatoire
      userdepistagelInfo.PsychoExamensClinique = userDI.PsychoExamensClinique

      await userdepistagelInfo.save()
      res.send({
        message: `PersInfo successfully updated... typeDeVisite: ${userDI.idDI}`
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to fetch the users ${err}`
      })
    }
  },

  // ********************* Bilans paracliniques *******************

  // Bilans Biologiques
  async showBB (req, res) {
    try {
      const id = req.body.id
      const bb = await BilansBiologique.findAll({
        where: {
          idPatient: id
        }
      })
      // const userJson = bb.toJSON()
      res.send({
        message: `response from the server to showBB function with id user : ${id}`,
        bb: bb
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to shoBB: ${err}`
      })
    }
  },

  async showBilanBiologique (req, res) {
    try {
      const id = req.body.id
      const bb = await BilansBiologique.findOne({
        where: {
          id: id
        }
      })
      // NFS
      var bbNFS
      if (!bb.idNFS) {
        bbNFS = {
          gr: 'null',
          gbPNN: 'null',
          gbPNEo: 'null',
          gbPNB: 'null',
          gbLymphocytes: 'null',
          gbMonocytes: 'null',
          plaquettes: 'null'
        }
        console.log('null')
      } else {
        bbNFS = await BilansBNFS.findOne({
          where: {
            id: bb.idNFS
          }
        })
        console.log('not null')
      }
      // BI
      var bbBI
      if (!bb.idBI) {
        bbBI = {
          vs: 'null',
          crp: 'null'
        }
      } else {
        bbBI = await BilansBInflammatoire.findOne({
          where: {
            id: bb.idBI
          }
        })
      }
      // BR
      var bbBR
      if (!bb.idBR) {
        bbBR = {
          urée: 'null',
          creatinine: 'null',
          clairanceDeLaCreatinine: 'null'
        }
      } else {
        bbBR = await BilansBRenale.findOne({
          where: {
            id: bb.idBR
          }
        })
      }
      // BH
      var bbBH
      if (!bb.idBH) {
        bbBH = {
          tgo: 'null',
          tgp: 'null',
          phosphataseAlcaline: 'null',
          ts: 'null',
          tp: 'null',
          tca: 'null',
          bilirubine: 'null',
          ldh: 'null',
          albumine: 'null',
          gammeGT: 'null',
          autre: 'null'
        }
      } else {
        bbBH = await BilansBHepathique.findOne({
          where: {
            id: bb.idBH
          }
        })
      }
      // BC
      var bbBC
      if (!bb.idBC) {
        bbBC = {
          ckmb: 'null',
          myoglobine: 'null',
          troponine: 'null',
          bnp: 'null',
          autre: 'null'
        }
      } else {
        bbBC = await BilansBCardiaque.findOne({
          where: {
            id: bb.idBC
          }
        })
      }
      // Io
      var bbIo
      if (!bb.idIo) {
        bbIo = {
          naS: 'null',
          kS: 'null',
          caS: 'null',
          clS: 'null',
          naU: 'null',
          kU: 'null'
        }
      } else {
        bbIo = await BilansBIonogramme.findOne({
          where: {
            id: bb.idIo
          }
        })
      }
      // BG
      var bbBG
      if (!bb.idBG) {
        bbBG = {
          glyJ: 'null',
          hb1c: 'null',
          autre: 'null'
        }
      } else {
        bbBG = await BilansBGlycemique.findOne({
          where: {
            id: bb.idBG
          }
        })
      }
      // BL
      var bbBL
      if (!bb.idBL) {
        bbBL = {
          cholesterol: 'null',
          triglycerides: 'null',
          ldl: 'null',
          hdl: 'null',
          autre: 'null'
        }
      } else {
        bbBL = await BilansBLipidique.findOne({
          where: {
            id: bb.idBL
          }
        })
      }
      // BU
      var bbBU
      if (!bb.idBU) {
        bbBU = {
          bu: 'null',
          ecbu: 'null'
        }
      } else {
        bbBU = await BilansBUrinaire.findOne({
          where: {
            id: bb.idBU
          }
        })
      }
      // BHor
      var bbBHor
      if (!bb.idBHor) {
        bbBHor = {
          tsh: 'null',
          t3: 'null',
          t4: 'null',
          autre: 'null'
        }
      } else {
        bbBHor = await BilansBHormonal.findOne({
          where: {
            id: bb.idBHor
          }
        })
      }
      // BS
      var bbBS
      if (!bb.idBS) {
        bbBS = {
          hiv: 'null',
          hbs: 'null',
          hcv: 'null',
          siphilis: 'null',
          autre: 'null'
        }
      } else {
        bbBS = await BilansBSerologie.findOne({
          where: {
            id: bb.idBS
          }
        })
      }

      // autre
      var bbautre
      if (!bb.autre) {
        bbautre = 'null'
      } else {
        bbautre = bb.autre
      }
      // BilanBiologique object
      const BilanBiologique = {
        NFS: bbNFS,
        BI: bbBI,
        BR: bbBR,
        BH: bbBH,
        BC: bbBC,
        Io: bbIo,
        BG: bbBG,
        BL: bbBL,
        BU: bbBU,
        BHor: bbBHor,
        BS: bbBS,
        autre: bbautre,
        Date: bb.createdAt,
        Motif: bb.motif
      }
      res.send({
        message: `response from the server to showBB function with id user : ${id}`,
        BilanBiologique: BilanBiologique
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to shoBB: ${err}`
      })
    }
  },

  async createBilanBiologique (req, res) {
    try {
      const bbReq = req.body.bb

      const bbBC = req.body.bb.BC
      const BC = await BilansBCardiaque.create(bbBC)
      const bbBG = req.body.bb.BG
      const BG = await BilansBGlycemique.create(bbBG)
      const bbBH = req.body.bb.BH
      const BH = await BilansBHepathique.create(bbBH)
      const bbBHor = req.body.bb.BHor
      const BHor = await BilansBHormonal.create(bbBHor)
      const bbBI = req.body.bb.BI
      const BI = await BilansBInflammatoire.create(bbBI)
      const bbBL = req.body.bb.BL
      const BL = await BilansBLipidique.create(bbBL)
      const bbBR = req.body.bb.BR
      const BR = await BilansBRenale.create(bbBR)
      const bbBS = req.body.bb.BS
      const BS = await BilansBSerologie.create(bbBS)
      const bbBU = req.body.bb.BU
      const BU = await BilansBUrinaire.create(bbBU)
      const bbIo = req.body.bb.Io
      const Io = await BilansBIonogramme.create(bbIo)
      const bbNFS = req.body.bb.NFS
      const NFS = await BilansBNFS.create(bbNFS)

      const bbCr = {
        motif: bbReq.Motif,
        idPatient: bbReq.idP,
        idBC: BC.id,
        idBG: BG.id,
        idBH: BH.id,
        idBHor: BHor.id,
        idBI: BI.id,
        idBL: BL.id,
        idBR: BR.id,
        idBS: BS.id,
        idBU: BU.id,
        idNFS: NFS.id,
        idIo: Io.id
      }
      const bb = await BilansBiologique.create(bbCr)
      res.send({
        message: 'response from the server to createBilanBiologique function',
        idP: bb.idPatient
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to shoBB: ${err}`
      })
    }
  }
}
