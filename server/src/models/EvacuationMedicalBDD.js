module.exports = (sequelize, DataTypes) =>
  sequelize.define('EvacuationMedicalBDD', {
    idUser: {
      type: DataTypes.INTEGER
    },
    Motif: {
      type: DataTypes.STRING
    },
    EvacVers: {
      type: DataTypes.STRING
    }
  })
