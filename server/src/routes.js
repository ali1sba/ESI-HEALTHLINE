const AdminControlerGestion = require('./controllers/AdminControlerGestion')
const adminControler = require('./controllers/adminControler')
const adminControler2 = require('./controllers/adminControler2')
const AuthController = require('./controllers/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')

module.exports = (app) => {
  app.post('/', AuthController.login)
  app.post('/register', AuthControllerPolicy.register, AuthController.register)
  app.post('/resetpw', AuthController.resetpw)
  app.get('/admin/novalid/', adminControler.index)
  app.get('/admin/valid/', adminControler2.index)
  app.post('/admin/valider', AdminControlerGestion.valider)
  app.post('/admin/delate', AdminControlerGestion.delate)
  app.post('/admin/disactiver', AdminControlerGestion.disactiver)
}
