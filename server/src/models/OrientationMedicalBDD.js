module.exports = (sequelize, DataTypes) =>
  sequelize.define('OrientationMedicalBDD', {
    idUser: {
      type: DataTypes.INTEGER
    },
    Motif: {
      type: DataTypes.STRING
    },
    OrientVers: {
      type: DataTypes.STRING
    }
  })
