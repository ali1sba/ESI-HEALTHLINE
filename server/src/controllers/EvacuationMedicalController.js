const { EvacuationMedicalBDD } = require('../models')

module.exports = {
  async createEvM (req, res) {
    try {
      const EvacuationMedicalreceived = req.body
      console.log(EvacuationMedicalreceived)
      // create RapportMedical
      const x = {
        idUser: EvacuationMedicalreceived.EvacuationMedical.idUser,
        Motif: EvacuationMedicalreceived.EvacuationMedical.Motif,
        EvacVers: EvacuationMedicalreceived.EvacuationMedical.EvacVers
      }
      console.log(x)
      const evacuationMedicalsaved = await EvacuationMedicalBDD.create(x)
      console.log(evacuationMedicalsaved)
      res.send({
        EvacuationMedical: evacuationMedicalsaved
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to create the users MF Evacuations ${err}`
      })
    }
  },
  async getEvacuations (req, res) {
    try {
      console.log(req.body)
      const evacuations = await EvacuationMedicalBDD.findAll({
        where: {
          idUser: req.body.id
        }
      })
      console.log(evacuations)
      res.send({
        evacuations: evacuations
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to create the users MF ${err}`
      })
    }
  }
}
