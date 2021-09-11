const { demanderBilan } = require('../models')
module.exports = {
  async createDB (req, res) {
    try {
      const DemandeBilanreceived = req.body
      console.log(DemandeBilanreceived)
      // create RapportMedical
      const demandeBilan = {
        idUser: DemandeBilanreceived.DemanderBilan.idUser,
        BilanBio: DemandeBilanreceived.DemanderBilan.BilanBio,
        BilanRadio: DemandeBilanreceived.DemanderBilan.BilanRadio,
        BilanElec: DemandeBilanreceived.DemanderBilan.BilanElec,
        Autre: DemandeBilanreceived.DemanderBilan.Autre
      }
      console.log(demandeBilan)
      const demandeBilancalsaved = await demanderBilan.create(demandeBilan)
      console.log(demandeBilancalsaved)
      res.send({
        DemandeBilan: demandeBilancalsaved
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to create the users MF ${err}`
      })
    }
  },
  async getDemandes (req, res) {
    try {
      console.log(req.body)
      const demandes = await demanderBilan.findAll({
        where: {
          idUser: req.body.id
        }
      })
      console.log(demandes)
      res.send({
        demandes: demandes
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to create the users MF ${err}`
      })
    }
  }
}
