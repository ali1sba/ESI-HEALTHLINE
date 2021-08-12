const { RapportMedical } = require('../models')

module.exports = {
  async createRM (req, res) {
    try {
      const RapportMedicalreceived = req.body
      console.log(RapportMedicalreceived)
      // create RapportMedical
      const rapportMedical = {
        idUser: RapportMedicalreceived.RapportMedical.idUser,
        Motif: RapportMedicalreceived.RapportMedical.Motif,
        HistoireDeLaMaladie: RapportMedicalreceived.RapportMedical.HistoireDeLaMaladie,
        EtatGeneral: RapportMedicalreceived.RapportMedical.EtatGeneral,
        Autre: RapportMedicalreceived.RapportMedical.Autre,
        Conclusion: RapportMedicalreceived.RapportMedical.Conclusion
      }
      const rapportMedicalsaved = await RapportMedical.create(rapportMedical)
      res.send({
        RapportMedical: rapportMedicalsaved
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to create the users MF ${err}`
      })
    }
  }
}
