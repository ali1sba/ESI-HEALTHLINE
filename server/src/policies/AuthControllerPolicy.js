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
      password2: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/),
      phoneNum: Joi.string().regex(/^[0-9]{10}$/),
      state: Joi.string().valid('Etudiant', 'ATS'),
      scolarYear: Joi.string().valid('1CPI', '2CPI', '1CS', '2CS-ISI', '2CS-SIW', '3CS-ISI', '3CS-SIW', '/'),
      group: Joi.string().valid('G1', 'G2', 'G3', 'G4', 'G5', '/')
    })

    const { error } = schema.validate(req.body)

    if (error) {
      switch (error.details[0].context.key) {
        case 'firstName':
          res.status(400).send({
            error: 'Vous devez fournir un prénom valide'
          })
          break
        case 'lastName':
          res.status(400).send({
            error: 'Vous devez fournir un nom valide'
          })
          break
        case 'email':
          res.status(400).send({
            error: 'Vous devez fournir une adresse e-mail valide'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Le mot de passe fourni ne correspondait pas'
          })
          break
        case 'birthday':
          res.status(400).send({
            error: 'Vous devez fournir un anniversaire valide'
          })
          break
        case 'sexe':
          res.status(400).send({
            error: 'Vous devez fournir un sexe valide'
          })
          break
        case 'phoneNum':
          res.status(400).send({
            error: 'Vous devez fournir un numéro de téléphone valide'
          })
          break
        case 'state':
          res.status(400).send({
            error: 'Vous devez fournir un état valide'
          })
          break
        case 'scolarYear':
          res.status(400).send({
            error: 'Vous devez fournir une année scolaire valide'
          })
          break
        default:
          res.status(400).send({
            error: `Informations d'inscription invalides ${error}`
          })
      }
    } else {
      next()
    }
  }
}
