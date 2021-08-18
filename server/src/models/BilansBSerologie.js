module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansBSerologie', {
    hiv: {
      type: DataTypes.STRING
    },
    hbs: {
      type: DataTypes.STRING
    },
    hcv: {
      type: DataTypes.STRING
    },
    siphilis: {
      type: DataTypes.STRING
    },
    autre: {
      type: DataTypes.STRING
    }
  })
