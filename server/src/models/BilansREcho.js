module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansREcho', {
    localisation: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    }
  })
