module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansREcho', {
    localisation: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    }
  })
