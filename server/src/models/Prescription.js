module.exports = (sequelize, DataTypes) =>
  sequelize.define('Prescription', {
    medicament: {
      type: DataTypes.STRING
    },
    quantité: {
      type: DataTypes.INTEGER
    },
    type: {
      type: DataTypes.STRING
    }

  })
