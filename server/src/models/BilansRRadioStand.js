module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansRRadioStand', {
    localisation: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    }
  })
