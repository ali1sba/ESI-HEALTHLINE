module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansECG', {
    localisation: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    }
  })
