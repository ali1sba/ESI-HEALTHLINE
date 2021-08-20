module.exports = (sequelize, DataTypes) =>
  sequelize.define('CertificatMedicalBDD', {
    idUser: {
      type: DataTypes.INTEGER
    },
    Motif: {
      type: DataTypes.STRING
    },
    HistoireDeLaMaladie: {
      type: DataTypes.INTEGER
    },
    EtatGeneral: {
      type: DataTypes.INTEGER
    },
    Autre: {
      type: DataTypes.STRING
    }
  })
