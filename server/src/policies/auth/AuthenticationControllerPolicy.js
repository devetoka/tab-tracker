const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const rules = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }
    const schema = Joi.object(rules)

    const { error } = schema.validate(req.body)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The passwords provided failed to match the following rules
            <br>
            1. It must contain ONLY the following characters: lower, uppercase, numbers
            <br>
            2.It must be at least 8 charcaters in length and not greater tha 32
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalida registration information'
          })
      }
    } else {
      return next()
    }
  }
}
