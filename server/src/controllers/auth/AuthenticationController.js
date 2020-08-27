const { User } = require('../../models')

class AuthenticationController {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (e) {
      console.log('erk', e)
      res.status(400).send({ message: '' })
    }
  }
}

module.exports = new AuthenticationController()
