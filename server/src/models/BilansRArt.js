module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansRArt', {
    localisation: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    }
  })
