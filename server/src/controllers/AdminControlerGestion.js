module.exports = {
  async activer (req, res) {
    try {
      res.send({
        message: `user : ${req.body.email} \n check your email`
      })
    } catch (err) {
      res.status(400).send({ error: `This email account have problem. ${err}` })
    }
  },

  async delate (req, res) {
    try {
      res.send({
        message: `user : ${req.body.email} \n check your email`
      })
    } catch (err) {
      res.status(400).send({ error: `This email account have problem. ${err}` })
    }
  },

  async disactiver (req, res) {
    try {
      res.send({
        message: `user : ${req.body.email} \n check your email`
      })
    } catch (err) {
      res.status(400).send({ error: `This email account have problem. ${err}` })
    }
  }
}
