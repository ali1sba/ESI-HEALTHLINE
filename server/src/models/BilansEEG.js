module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansEEG', {
    localisation: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    }
  })
