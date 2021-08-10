module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansRIRM', {
    localisation: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    }
  })
