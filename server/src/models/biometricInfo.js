module.exports = (sequelize, DataTypes) =>
  sequelize.define('BiometricInfo', {
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
