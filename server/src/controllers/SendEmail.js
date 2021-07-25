const nodemailer = require('nodemailer')

const smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'healthline.auth.services@gmail.com',
    pass: 'HealthLine-Project2021%*'
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
            'http://localhost:8081/#/resetpw/' + token + '\n\n' +
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
  }
}
