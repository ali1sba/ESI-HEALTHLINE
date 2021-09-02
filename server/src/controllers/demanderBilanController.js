const { DemandeBilan } = require('../models')
module.exports = {
  async createDB (req, res) {
    try {
      const DemandeBilanreceived = req.body
      console.log(DemandeBilanreceived)
      // create RapportMedical
      const demandeBilan = {
        idUser: DemandeBilanreceived.DemandeBilan.idUser,
        BilanDeSanté: DemandeBilanreceived.DemandeBilan.BilanDeSanté,
        TypeDeBilan: DemandeBilanreceived.DemandeBilan.TypeDeBilan,
        Autre: DemandeBilanreceived.DemandeBilan.Autre
      }
      const demandeBilancalsaved = await DemandeBilan.create(demandeBilan)
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
      const demandes = await DemandeBilan.findAll({
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
