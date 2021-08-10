module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansRAutre', {
    localisation: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    }
  })
