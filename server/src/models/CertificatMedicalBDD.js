module.exports = (sequelize, DataTypes) =>
  sequelize.define('CertificatMedicalBDD', {
    idUser: {
      type: DataTypes.INTEGER
    },
    Motif: {
      type: DataTypes.STRING
    },
    HistoireDeLaMaladie: {
      type: DataTypes.STRING
    },
    EtatGeneral: {
      type: DataTypes.STRING
    },
    Autre: {
      type: DataTypes.STRING
    }
  })
