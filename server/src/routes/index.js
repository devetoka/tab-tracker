const AuthenticationController = require('../controllers/auth/AuthenticationController')
const AuthenticationControllerPolicy = require('../policies/auth/AuthenticationControllerPolicy')
module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
}
