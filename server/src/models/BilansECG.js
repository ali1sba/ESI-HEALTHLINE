module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansECG', {
    path: {
      type: DataTypes.STRING
    },
    inter: {
      type: DataTypes.STRING
    }
  })
