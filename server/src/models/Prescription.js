module.exports = (sequelize, DataTypes) =>
  sequelize.define('Prescription', {
    nom: {
      type: DataTypes.STRING
    },
    forme: {
      type: DataTypes.STRING
    },
    posologie: {
      type: DataTypes.STRING
    },
    ordonnanceId: {
      type: DataTypes.INTEGER
    }

  })
