const AdminControlerGestion = require('./controllers/AdminControlerGestion')
const adminControler = require('./controllers/adminControler')
const adminControler2 = require('./controllers/adminControler2')
const adminControler3 = require('./controllers/adminControler3')
const AuthController = require('./controllers/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')
const DocDashboardController = require('./controllers/DocDashboardController')
const AssistantController = require('./controllers/AssistantController')

const RapportMedicalController = require('./controllers/RapportMedicalController')
const OrientationMedicalController = require('./controllers/OrientationMedicalController')
const EvacuationMedicalController = require('./controllers/EvacuationMedicalController')
const CertificatMedicalController = require('./controllers/CertificatMedicalController')
const RDVController = require('./controllers/RDVController')

const { uuid } = require('uuidv4')
const { BilansECG } = require('./models')
const { BilansEEG } = require('./models')
const { BilansEMG } = require('./models')
const { BilansElectrique } = require('./models')
let idECG = ''
let idEEG = ''
let idEMG = ''

// Upload files
const multer = require('multer')
const storageBE = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'ECG') {
      cb(null, './uploads/BilansElec/ECG')
    } else if (file.fieldname === 'EEG') {
      cb(null, './uploads/BilansElec/EEG')
    } else if (file.fieldname === 'EMG') {
      cb(null, './uploads/BilansElec/EMG')
    }
  },
  filename: async (req, file, cb) => {
    if (file.fieldname === 'ECG') {
      const filePath = `${uuid()}-${file.originalname}`
      cb(null, filePath)
      const ECG = {
        inter: req.body.BEinterECG,
        path: `uploads/BilansElec/ECG/${filePath}`
      }
      const BEecg = await BilansECG.create(ECG)
      idECG = BEecg.id
    } else if (file.fieldname === 'EEG') {
      const filePath = `${uuid()}-${file.originalname}`
      cb(null, filePath)
      const EEG = {
        inter: req.body.BEinterEEG,
        path: `uploads/BilansElec/EEG/${filePath}`
      }
      const BEeeg = await BilansEEG.create(EEG)
      idEEG = BEeeg.id
    } else if (file.fieldname === 'EMG') {
      const filePath = `${uuid()}-${file.originalname}`
      cb(null, filePath)
      const EMG = {
        inter: req.body.BEinterEMG,
        path: `uploads/BilansElec/EMG/${filePath}`
      }
      const BEemg = await BilansEMG.create(EMG)
      idEMG = BEemg.id
    }
  }
})
const uploadBE = multer({ storage: storageBE })

// const { Compte } = require('./models')
// const passport = require('passport')
// getting the local authentication type
// const LocalStrategy = require('passport-local').Strategy

/*
const authMiddleware = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.status(401).send('You are not authenticated')
  } else {
    return next()
  }
}
// config passport
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    (username, password, done) => {
      try {
        // problem :
        const user = Compte.findOne({
          where: {
            email: username
          }
        })
        const userJson = JSON.stringify(user)
        if (!user) {
          done(null, false, { message: 'Incorrect username' })
        } else {
          if (user.state === 'ACTIVATED') {
            const isPasswordValid = user.comparePassword(password)
            if (!isPasswordValid) {
              done(null, false, { message: 'Incorrect or password' })
            } else {
              done(null, user)
            }
          } else {
            done(null, false, {
              message: `Incorrect username or password ${username}`,
              user: userJson
            })
          }
        }
      } catch (err) {
        done(null, false, { error: `An error occured trying to login ${err}` })
      }
    }
  )
)
*/
module.exports = (app) => {
  /*
  app.post('/', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err)
      }
      if (!user) {
        return res.send([user, 'Cannot log in', info])
      }
      req.login(user, err => {
        if (err) {
          return next(err)
        } else {
          res.send('Logged in')
        }
      })
    })(req, res, next)
  })
  app.get('/api/user', authMiddleware, (req, res) => {
    const user = Compte.findOne({
      where: {
        id: req.session.passport.user
      }
    })
    console.log([user, req.session])
    res.send({ user: user })
  })
  */
  app.post('/', AuthController.login)
  // app.get('/logout', AuthController.logout)
  app.post('/register', AuthControllerPolicy.register, AuthController.register)
  app.post('/forgotpw', AuthController.forgotpw)
  app.post('/resetpw', AuthController.resetpw)
  app.get('/admin/novalid/', adminControler.index)
  app.get('/admin/valid/', adminControler2.index)
  app.get('/admin/compte/', adminControler3.index)
  app.post('/admin/validateUser', AdminControlerGestion.validateUser)
  app.post('/admin/deleteUser', AdminControlerGestion.deleteUser)
  app.post('/admin/desactivateUser', AdminControlerGestion.desactivateUser)
  app.post('/admin/activateUser', AdminControlerGestion.activateUser)
  app.post('/admin/adminRegister', AdminControlerGestion.adminRegister)
  app.get('/doc/patients', DocDashboardController.recoverPatients)
  app.post('/DOCdashboard', DocDashboardController.createMF)
  app.post('/DOCdashboard/showPatient', DocDashboardController.showPatient)
  app.post('/DOCdashboard/savePersInfo', DocDashboardController.savePersInfo)
  app.post('/DOCdashboard/saveBioInfo', DocDashboardController.saveBiometricInfo)
  // app.post('/DOCdashboard/saveAntInfo', DocDashboardController.saveAntInfo)
  app.post('/DOCdashboard/saveDepiInfo', DocDashboardController.saveScreeningInfo)
  app.post('/DOCdashboard/recoverMedicaments', DocDashboardController.recoverMedicaments)
  app.post('/DOCdashboard/recoverFormes', DocDashboardController.recoverFormes)
  app.post('/DOCdashboard/recoverDosages', DocDashboardController.recoverDosages)
  app.post('/DOCdashboard/recoverMarques', DocDashboardController.recoverMarques)
  app.post('/DOCdashboard/createOrdonnance', DocDashboardController.createOrdonnance)
  app.post('/DOCdashboard/addpresc', DocDashboardController.addpresc)
  app.post('/DOCdashboard/recoverOrdonnances', DocDashboardController.recoverOrdonnances)
  app.post('/DOCdashboard/saveOrdonnance', DocDashboardController.saveOrdonnance)
  app.post('/DOCdashboard/showOrdonnance', DocDashboardController.showOrdonnance)
  // ************************ rapport medical ***************************
  app.post('/RapportMedical', RapportMedicalController.createRM)
  app.post('/getRapportMedical', RapportMedicalController.getRepports)
  // ************************ Orientation medicalll **********************
  app.post('/OrientationMedical', OrientationMedicalController.createOM)
  app.post('/getOrientationMedical', OrientationMedicalController.getOrientations)
  // ************************ Evacuation medicalll **********************
  app.post('/EvacuationMedical', EvacuationMedicalController.createEvM)
  app.post('/getEvacuationMedical', EvacuationMedicalController.getEvacuations)
  // ************************ Certificat medicalll **********************
  app.post('/CertificatMedical', CertificatMedicalController.createCM)
  app.post('/getCertificatMedical', CertificatMedicalController.getCertificats)
  // ************************ Bilans paracliniques **********************
  // Bilans Biologiques
  app.post('/DOCdashboard/showBB', DocDashboardController.showBB)
  app.post('/DOCdashboard/showBilanBiologique', DocDashboardController.showBilanBiologique)
  app.post('/DOCdashboard/createBilanBiologique', DocDashboardController.createBilanBiologique)
  // Bilans Electriques
  app.post('/DOCdashboard/showBE', DocDashboardController.showBE)
  app.post('/DOCdashboard/showBilanElectrique', DocDashboardController.showBilanElectrique)
  app.post('/DOCdashboard/downloadBeFile', DocDashboardController.downloadBeFile)
  app.post('/DOCdashboard/createBilanElectrique', uploadBE.any(), async (req, res) => {
    const BE = {
      motif: req.body.BEMotif,
      idPatient: req.body.idPatient
    }
    const BECr = await BilansElectrique.create(BE)
    BECr.idECG = idECG
    BECr.idEEG = idEEG
    BECr.idEMG = idEMG
    await BECr.save()
    res.send({
      file: req.files,
      body: req.body
    })
  })
  // ************************ RDV medical ***************************
  app.post('/progRDVPatient', RDVController.progRDVPatient)
  app.post('/showRDVSelectedPatient', RDVController.showRDVSelectedPatient)
  app.post('/annulerRDV', RDVController.annulerRDV)
  app.post('/saveChangRDVPatient', RDVController.saveChangRDVPatient)
  app.post('/showRDVSelectedPatientapp', RDVController.showRDVSelectedPatientapp)
  // ***************************** Assistant ****************************
  // ********** RDV GROUP **********
  app.post('/Assistant/recoverRDVG', AssistantController.recoverRDVG)
  app.post('/Assistant/progRDVGroup', AssistantController.progRDVGroup)
  app.post('/Assistant/confirmModifRDVGroup', AssistantController.confirmModifRDVGroup)
  app.post('/Assistant/annulerRDVGroup', AssistantController.annulerRDVGroup)
  // ********** RDV INDIV **********
  app.post('/Assistant/recoverPatients', AssistantController.recoverPatients)
  app.post('/Assistant/recoverRDVI', AssistantController.recoverRDVI)
  app.post('/Assistant/progRDVIndividuel', AssistantController.progRDVIndividuel)
  app.post('/Assistant/confirmModifRDVIndividuel', AssistantController.confirmModifRDVIndividuel)
  app.post('/Assistant/annulerRDVIndiv', AssistantController.annulerRDVIndiv)
  // ******show rdv in dashboard*****
  app.post('/showRDVDashboard', RDVController.showRDVDashboard)
}
