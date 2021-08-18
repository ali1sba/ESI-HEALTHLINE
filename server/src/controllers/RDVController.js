const { RDV } = require('../models')

module.exports = {
  async progRDVPatient (req, res) {
    try {
      const RDVreceived = req.body
      console.log(RDVreceived)
      // create RapportMedical
      const RDVToSave = {
        idUser: RDVreceived.form.idUser,
        DateAndTime: RDVreceived.form.dateAndTime,
        Type: RDVreceived.form.typeDeRDV,
        Note: RDVreceived.form.note
      }
      const RDVsaved = await RDV.create(RDVToSave)
      res.send({
        RDV: RDVsaved
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to create RDV ${err}`
      })
    }
  },
  async showRDVSelectedPatient (req, res) {
    try {
      const idreceived = req.body.id
      console.log(idreceived)
      // create RapportMedical
      const RDVList = await RDV.findAll({
        where: {
          idUser: idreceived
        }
      })
      res.send({
        RDVList: RDVList
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to create RDV ${err}`
      })
    }
  }
}
