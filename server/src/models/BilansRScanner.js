module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansRScanner', {
    localisation: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    }
  })
