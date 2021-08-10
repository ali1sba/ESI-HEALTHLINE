module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansEEG', {
    localisation: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    }
  })
