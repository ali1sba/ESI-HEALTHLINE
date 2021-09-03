module.exports = (sequelize, DataTypes) =>
  sequelize.define('demanderBilan', {
    idUser: {
      type: DataTypes.INTEGER
    },
    BilanDeSante: {
      type: DataTypes.STRING
    },
    TypeDeBilan: {
      type: DataTypes.STRING
    },
    Autre: {
      type: DataTypes.STRING
    }
  })
