module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansEMG', {
    path: {
      type: DataTypes.STRING
    },
    inter: {
      type: DataTypes.STRING
    }
  })
