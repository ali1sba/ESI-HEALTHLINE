const AdminControlerGestion = require('./controllers/AdminControlerGestion')
const adminControler = require('./controllers/adminControler')
const adminControler2 = require('./controllers/adminControler2')
const adminControler3 = require('./controllers/adminControler3')
const AuthController = require('./controllers/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')
const DocDashboardController = require('./controllers/DocDashboardController')
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
  app.post('/DOCdashboard/createOrdonnance', DocDashboardController.createOrdonnance)
  app.post('/DOCdashboard/addpresc', DocDashboardController.addpresc)
  app.post('/DOCdashboard/recoverOrdonnances', DocDashboardController.recoverOrdonnances)
  app.post('/DOCdashboard/showOrdonnance', DocDashboardController.showOrdonnance)
}
