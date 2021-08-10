module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansEMG', {
    localisation: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    }
  })
