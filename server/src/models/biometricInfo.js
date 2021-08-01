module.exports = (sequelize, DataTypes) =>
  sequelize.define('biometricInfo', {

    taille: {
      type: DataTypes.REAL
    },
    poids: {
      type: DataTypes.REAL
    },
    imc: {
      type: DataTypes.REAL
    }
  })
