const { CertificatMedicalBDD } = require('../models')

module.exports = {
  async createCM (req, res) {
    try {
      const CertificatMedicalreceived = req.body
      console.log(CertificatMedicalreceived)
      // create CertificatMedical
      const certificatMedical = {
        idUser: CertificatMedicalreceived.CertificatMedical.idUser,
        Motif: CertificatMedicalreceived.CertificatMedical.Motif,
        HistoireDeLaMaladie: CertificatMedicalreceived.CertificatMedical.HistoireDeLaMaladie,
        EtatGeneral: CertificatMedicalreceived.CertificatMedical.EtatGeneral,
        Autre: CertificatMedicalreceived.CertificatMedical.Autre,
        Conclusion: CertificatMedicalreceived.CertificatMedical.Conclusion
      }
      const certificatMedicalsaved = await CertificatMedicalBDD.create(certificatMedical)
      res.send({
        CertificatMedical: certificatMedicalsaved
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to create the users MF ${err}`
      })
    }
  },
  async getCertificats (req, res) {
    try {
      console.log(req.body)
      const certificats = await CertificatMedicalBDD.findAll({
        where: {
          idUser: req.body.id
        }
      })
      console.log(certificats)
      res.send({
        certificats: certificats
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to create the users MF ${err}`
      })
    }
  }
}
