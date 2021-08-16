module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansEMG', {
    localisation: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    }
  })
