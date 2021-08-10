module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansRRadioStand', {
    localisation: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    }
  })
