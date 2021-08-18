module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansRAutre', {
    localisation: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    }
  })
