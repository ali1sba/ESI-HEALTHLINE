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

const smtpTransportH = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'healthlineproject@gmail.com',
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
            'http://localhost:8080' + '\n\n' +
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
  },

  // ********************* RDV ***************************
  async sendprogRDVPatientEmail (email, date, heure, res) {
    const mailOptions = {
      to: email,
      from: 'healthlineproject@gmail.com',
      subject: 'Nouveau rendez-vous',
      text: 'Vous avez un nouveau rendez-vous avec le médecin le ' + date + ' à ' + heure + '.\n' +
            'Pour plus d`informations consultez vos rendez-vous.\n\n' +
            '--HEALTHLINE--'
    }
    smtpTransportH.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.send({
          error: `Error in smtpTransportH.sendMail : ${err} `
        })
      } else {
        res.send({
          message: `info, An e-mail has been sent to ${email} with further instructions.`
        })
      }
    })
  },

  async sendannulerRDVEmail (email, date, heure, res) {
    const mailOptions = {
      to: email,
      from: 'healthlineproject@gmail.com',
      subject: 'Rendez-vous annulé',
      text: 'Votre rendez-vous du ' + date + ' à ' + heure + ' a été annulé.\n' +
            'Pour plus d`informations consultez vos rendez-vous.\n\n' +
            '--HEALTHLINE--'
    }
    smtpTransportH.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.send({
          error: `Error in smtpTransportH.sendMail : ${err} `
        })
      } else {
        res.send({
          message: `info, An e-mail has been sent to ${email} with further instructions.`
        })
      }
    })
  },

  async sendsaveChangRDVPatientEmail (email, date, heure, res) {
    const mailOptions = {
      to: email,
      from: 'healthlineproject@gmail.com',
      subject: 'Rendez-vous modifié',
      text: 'Votre rendez-vous du ' + date + ' à ' + heure + ' a été modifié.\n' +
            'Pour plus d`informations consultez vos rendez-vous.\n\n' +
            '--HEALTHLINE--'
    }
    smtpTransportH.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.send({
          error: `Error in smtpTransportH.sendMail : ${err} `
        })
      } else {
        res.send({
          message: `info, An e-mail has been sent to ${email} with further instructions.`
        })
      }
    })
  },

  async sendvaliderRDVdemandeEmail (email, date, heure, res) {
    const mailOptions = {
      to: email,
      from: 'healthlineproject@gmail.com',
      subject: 'Demande de rendez-vous acceptée',
      text: 'Votre demande de rendez-vous pour le ' + date + ' à ' + heure + ' a été acceptée.\n' +
            'Pour plus d`informations consultez vos rendez-vous.\n\n' +
            '--HEALTHLINE--'
    }
    smtpTransportH.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.send({
          error: `Error in smtpTransportH.sendMail : ${err} `
        })
      } else {
        res.send({
          message: `info, An e-mail has been sent to ${email} with further instructions.`
        })
      }
    })
  },

  async sendrefuserRDVdemandeEmail (email, date, heure, res) {
    const mailOptions = {
      to: email,
      from: 'healthlineproject@gmail.com',
      subject: 'Demande de rendez-vous refusée',
      text: 'Votre demande de rendez-vous pour le ' + date + ' à ' + heure + ' a été refusée.\n' +
            'Pour plus d`informations consultez vos rendez-vous.\n\n' +
            '--HEALTHLINE--'
    }
    smtpTransportH.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.send({
          error: `Error in smtpTransportH.sendMail : ${err} `
        })
      } else {
        res.send({
          message: `info, An e-mail has been sent to ${email} with further instructions.`
        })
      }
    })
  },

  async sendenregistrerDemandeReportRDVEmail (email, date, heure, Nvdate, Nvheure, res) {
    const mailOptions = {
      to: email,
      from: 'healthlineproject@gmail.com',
      subject: 'Demande de report de rendez-vous acceptée',
      text: 'Votre demande de report de rendez-vous du ' + date + ' à ' + heure + ' a été acceptée, le rendez-vous aura lieu le ' + Nvdate + ' à ' + Nvheure + '.\n' +
            'Pour plus d`informations consultez vos rendez-vous.\n\n' +
            '--HEALTHLINE--'
    }
    smtpTransportH.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.send({
          error: `Error in smtpTransportH.sendMail : ${err} `
        })
      } else {
        res.send({
          message: `info, An e-mail has been sent to ${email} with further instructions.`
        })
      }
    })
  },

  async sendrefuserDemandeReportRDVEmail (email, date, heure, res) {
    const mailOptions = {
      to: email,
      from: 'healthlineproject@gmail.com',
      subject: 'Demande de report de rendez-vous refusée',
      text: 'Votre demande de report de rendez-vous du ' + date + ' à ' + heure + ' a été refusée.\n' +
            'Pour plus d`informations consultez vos rendez-vous.\n\n' +
            '--HEALTHLINE--'
    }
    smtpTransportH.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.send({
          error: `Error in smtpTransportH.sendMail : ${err} `
        })
      } else {
        res.send({
          message: `info, An e-mail has been sent to ${email} with further instructions.`
        })
      }
    })
  }
}
