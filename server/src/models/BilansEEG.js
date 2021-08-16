module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansEEG', {
    path: {
      type: DataTypes.STRING
    },
    inter: {
      type: DataTypes.STRING
    }
  })
