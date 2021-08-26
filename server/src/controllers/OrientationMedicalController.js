const { OrientationMedicalBDD } = require('../models')

module.exports = {
  async createOM (req, res) {
    try {
      const OrientationMedicalreceived = req.body
      console.log(OrientationMedicalreceived)
      // create RapportMedical
      const x = {
        idUser: OrientationMedicalreceived.OrientationMedical.idUser,
        Motif: OrientationMedicalreceived.OrientationMedical.Motif,
        OrientVers: OrientationMedicalreceived.OrientationMedical.OrientVers
      }
      console.log(x)
      const orientationMedicalsaved = await OrientationMedicalBDD.create(x)
      console.log(orientationMedicalsaved)
      res.send({
        OrientationMedical: orientationMedicalsaved
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to create the users MF ${err}`
      })
    }
  },
  async getOrientations (req, res) {
    try {
      console.log(req.body)
      const orientations = await OrientationMedicalBDD.findAll({
        where: {
          idUser: req.body.id
        }
      })
      console.log(orientations)
      res.send({
        orientations: orientations
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to create the users MF ${err}`
      })
    }
  }
}
