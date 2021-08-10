module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansBInflammatoire', {
    vs: {
      type: DataTypes.STRING,
    },
    crp: {
      type: DataTypes.STRING,
    }
  })
