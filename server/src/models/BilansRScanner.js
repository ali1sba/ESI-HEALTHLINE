module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansRScanner', {
    localisation: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    }
  })
