module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansBLipidique', {
    cholesterol: {
      type: DataTypes.STRING
    },
    triglycerides: {
      type: DataTypes.STRING
    },
    ldl: {
      type: DataTypes.STRING
    },
    hdl: {
      type: DataTypes.STRING
    },
    autre: {
      type: DataTypes.STRING
    }
  })
