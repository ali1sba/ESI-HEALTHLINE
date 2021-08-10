module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansRIRM', {
    localisation: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    }
  })
