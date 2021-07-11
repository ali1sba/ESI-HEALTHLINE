const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      firstName: Joi.string(),
      lastName: Joi.string(),
      birthday: Joi.date(),
      sexe: Joi.string().valid('HOMME', 'FEMME'),
      email: Joi.string().email(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/),
      phoneNumber: Joi.string().regex(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/),
      state: Joi.string().valid('Etudiant', 'Enseignant', 'AS'),
      scolarYear: Joi.string().valid('1CPI', '2CPI', '1CS', '2CS', '3CS', 'NULL')
    })

    const { error } = schema.validate(req.body)

    if (error) {
      switch (error.details[0].context.key) {
        case 'firstName':
          res.status(400).send({
            error: 'You must provide a valid firstName'
          })
          break
        case 'lastName':
          res.status(400).send({
            error: 'You must provide a valid lastName'
          })
          break
        case 'birthday':
          res.status(400).send({
            error: 'You must provide a valid birthday'
          })
          break
        case 'sexe':
          res.status(400).send({
            error: 'You must provide a valid sexe'
          })
          break
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
            <br>
            1. It must contain ONLY the following characters: lower case, upper case, numerics.
            <br>
            2. It must be at least 8 characters in length and not greater than 32 characters in length.
            `
          })
          break
        case 'phoneNumber':
          res.status(400).send({
            error: 'You must provide a valid phoneNumber'
          })
          break
        case 'state':
          res.status(400).send({
            error: 'You must provide a valid state'
          })
          break
        case 'scolarYear':
          res.status(400).send({
            error: 'You must provide a valid scolarYear'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
