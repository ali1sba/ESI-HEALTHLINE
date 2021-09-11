module.exports = (sequelize, DataTypes) =>
  sequelize.define('demanderBilan', {
    idUser: {
      type: DataTypes.INTEGER
    },
    BilanBio: {
      type: DataTypes.STRING
    },
    BilanRadio: {
      type: DataTypes.STRING
    },
    BilanElec: {
      type: DataTypes.STRING
    },
    Autre: {
      type: DataTypes.STRING
    }
  })
