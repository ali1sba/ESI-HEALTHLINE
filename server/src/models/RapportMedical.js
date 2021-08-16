module.exports = (sequelize, DataTypes) =>
  sequelize.define('RapportMedical', {
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
    },
    Conclusion: {
      type: DataTypes.STRING
    }
  })
