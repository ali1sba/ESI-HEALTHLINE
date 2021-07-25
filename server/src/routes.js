const AdminControlerGestion = require('./controllers/AdminControlerGestion')
const adminControler = require('./controllers/adminControler')
const adminControler2 = require('./controllers/adminControler2')
const AuthController = require('./controllers/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')

module.exports = (app) => {
  app.post('/', AuthController.login)
  app.post('/register', AuthControllerPolicy.register, AuthController.register)
  app.post('/forgotpw', AuthController.forgotpw)
  app.post('/resetpw', AuthController.resetpw)
  app.get('/admin/novalid/', adminControler.index)
  app.get('/admin/valid/', adminControler2.index)
  app.post('/admin/validateUser', AdminControlerGestion.validateUser)
  app.post('/admin/deleteUser', AdminControlerGestion.deleteUser)
  app.post('/admin/desactivateUser', AdminControlerGestion.desactivateUser)
}
