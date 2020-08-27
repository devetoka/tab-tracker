const AuthenticationController = require('../controllers/auth/AuthenticationController')
module.exports = (app) => {
  app.post('/register', AuthenticationController.register)
}
