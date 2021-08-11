module.exports = (sequelize, DataTypes) =>
  sequelize.define('Ordonnance', {
    patientId: {
      type: DataTypes.INTEGER
    },
    nombreMed: {
      type: DataTypes.INTEGER
    }

  })
