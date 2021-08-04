const { Op } = require('sequelize')
const { User } = require('../models')
const { Compte } = require('../models')

const { MedicalFile } = require('../models')
const { PersonalInfo } = require('../models')
const { Depistage } = require('../models')

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
        checkedDouleurs: true,
        textarea1: null,
        textarea2: null,
        textarea3: null,
        textarea4: null,
        textarea5: null,
        textarea6: null,
        CVPouls: null,
        CVTa: null,
        CVCyanose: null,
        checkListOphtalmolodique: [''],
        checkListORL: [''],
        checkListLocomoteur: [''],
        checkListRespiratoire: [''],
        checkListCardioVasculaire: [''],
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
        DigestifAutres: null,
        DigestifPyrosis: false,
        DigestifVomissements: false,
        checkDigestifAppétit: false,
        checkDigestifTransit: false,
        checkDigestifSelles: false,
        checkDigestifRectorragies: false,
        checkDigestifDouleurAbdominales: false,
        checkDigestifAutres: false,
        checkListHematologique: [''],
        HematologiquePétéchies: null,
        HematologiquePurpura: null,
        HematologiqueRate: null,
        HematologiqueCervicaux: null,
        HematologiqueSsAuxillaires: null,
        HematologiqueSsClaviculaires: null,
        HematologiqueIngionaux: null,
        checkListEndocrinologie: [''],
        EndocrinologieTyroide: null,
        EndocrinologieTesticules: null,
        EndocrinologieGlandesMammaires: null,
        PsychoInterrogatoire: null,
        PsychoExamensClinique: null
      }
      const DepistageInformation = await Depistage.create(DepistageInfo)
      // fifth : create the medicalFile
      const medFile = {
        email: userAccount.email,
        idUser: userId,
        personalInfoId: userPersonalInfo.id,
        biometricInfoId: null,
        antecedentsInfoId: null,
        screeningInfoId: DepistageInformation.id
      }
      const userMF = await MedicalFile.create(medFile)

      const mfJson = userMF.toJSON()
      const piJson = userPersonalInfo.toJSON()
      const biJson = ''
      const aiJson = ''
      const siJson = DepistageInformation.toJSON()
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
          depistagelInfo: {
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
            checkedDouleurs: true,
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
            DigestifAutres: '',
            DigestifPyrosis: false,
            DigestifVomissements: false,
            checkDigestifAppétit: false,
            checkDigestifTransit: false,
            checkDigestifSelles: false,
            checkDigestifRectorragies: false,
            checkDigestifDouleurAbdominales: false,
            checkDigestifAutres: false,
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
          // here we add bioInfo, antecedentInfo and depistageInfo // same thing with ExamenMedical, RDV and statistics
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

        // find antecedentsInfo record by id

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
            state: userPI.state,
            scolarYear: userPI.scolarYear,
            category: userPI.category
          },
          depistagelInfo: {
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
      const userDI = req.body.depistagelInfo
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
        message: `PersInfo successfully updated... typeDeVisite: ${userDI.typeDeVisite}`
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to fetch the users ${err}`
      })
    }
  }
}
