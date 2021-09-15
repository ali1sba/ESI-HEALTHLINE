const nodemailer = require('nodemailer')

const smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'healthline.auth.services@gmail.com',
    pass: '#Health#Line Project#2021 %*#'
  },
  tls: {
    rejectUnauthorized: false
  }
})

module.exports = {
  async sendResetLink (email, token, res) {
    const mailOptions = {
      to: email,
      from: 'healthline.auth.services@gmail.com',
      subject: 'Node.js Password Reset',
      text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
            'http://localhost:8080/#/resetpw/' + token + '\n\n' +
            'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    }
    smtpTransport.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.send({
          error: `Error in smtpTransport.sendMail : ${err} `
        })
      } else {
        res.send({
          message: `info, An e-mail has been sent to ${email} with further instructions.`
        })
      }
    })
  },

  async sendConfirmationEmailResetpw (email, res) {
    const mailOptions = {
      to: email,
      from: 'healthline.auth.services@gmail.com',
      subject: 'Node.js Password Reset',
      text: 'Your password has been successfully updated.\n\n'
    }
    smtpTransport.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.send({
          error: `Error in smtpTransport.sendMail : ${err} `
        })
      } else {
        res.send({
          message: `info, An e-mail has been sent to ${email} to inform about the password update.`
        })
      }
    })
  },

  async sendRegistrationEmail (email, res) {
    const mailOptions = {
      to: email,
      from: 'healthline.auth.services@gmail.com',
      subject: 'Demande d`inscription',
      text: 'Votre demande d`inscription sera prise en charge dans les meilleurs délais.\n\n' +
            'Vous recevrez un mail après avoir étudier votre demande.\n\n' +
            '--HEALTHLINE--'
    }
    smtpTransport.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.send({
          error: `Error in smtpTransport.sendMail : ${err} `
        })
      } else {
        res.send({
          message: `info, An e-mail has been sent to ${email} with further instructions.`
        })
      }
    })
  },

  async sendValidateUserEmail (email, res) {
    const mailOptions = {
      to: email,
      from: 'healthline.auth.services@gmail.com',
      subject: 'Bienvenue sur HEALTHLINE !',
      text: 'Votre demande d`inscription a été validée.\n\n' +
            'Vous pouvez maintenant vous connecter au site.\n\n' +
            '\n\n' +
            'Nous vous remercions d`avoir choisi HEALTHLINE.'
    }
    smtpTransport.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.send({
          error: `Error in smtpTransport.sendMail : ${err} `
        })
      } else {
        res.send({
          message: `info, An e-mail has been sent to ${email} with further instructions.`
        })
      }
    })
  },

  async sendDeleteUserEmail (email, res) {
    const mailOptions = {
      to: email,
      from: 'healthline.auth.services@gmail.com',
      subject: 'Demande d`inscription refusée',
      text: 'Votre demande d`inscription a été refusée.\n\n' +
            '--HEALTHLINE--'
    }
    smtpTransport.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.send({
          error: `Error in smtpTransport.sendMail : ${err} `
        })
      } else {
        res.send({
          message: `info, An e-mail has been sent to ${email} with further instructions.`
        })
      }
    })
  },

  async sendDesactivateUserEmail (email, res) {
    const mailOptions = {
      to: email,
      from: 'healthline.auth.services@gmail.com',
      subject: 'Compte désactivé',
      text: 'Votre compte a été désactivé.\n\n' +
            '--HEALTHLINE--'
    }
    smtpTransport.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.send({
          error: `Error in smtpTransport.sendMail : ${err} `
        })
      } else {
        res.send({
          message: `info, An e-mail has been sent to ${email} with further instructions.`
        })
      }
    })
  },

  async sendActivateUserEmail (email, res) {
    const mailOptions = {
      to: email,
      from: 'healthline.auth.services@gmail.com',
      subject: 'Compte activé',
      text: 'Votre compte a été activé.\n\n' +
            '--HEALTHLINE--'
    }
    smtpTransport.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.send({
          error: `Error in smtpTransport.sendMail : ${err} `
        })
      } else {
        res.send({
          message: `info, An e-mail has been sent to ${email} with further instructions.`
        })
      }
    })
  }
}
