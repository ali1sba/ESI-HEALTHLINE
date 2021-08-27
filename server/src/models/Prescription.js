module.exports = (sequelize, DataTypes) =>
  sequelize.define('Prescription', {
    nom: {
      type: DataTypes.STRING
    },
    marque: {
      type: DataTypes.STRING
    },
    forme: {
      type: DataTypes.STRING
    },
    dosage: {
      type: DataTypes.STRING
    },
    duree: {
      type: DataTypes.STRING
    },
    ordonnanceId: {
      type: DataTypes.INTEGER
    }

  })
