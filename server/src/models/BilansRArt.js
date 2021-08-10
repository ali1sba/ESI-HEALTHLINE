module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansRArt', {
    localisation: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    }
  })
