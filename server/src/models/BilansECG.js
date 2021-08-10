module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansECG', {
    localisation: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    }
  })
