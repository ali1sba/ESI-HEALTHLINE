module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansBHormonal', {
    tsh: {
      type: DataTypes.STRING
    },
    t3: {
      type: DataTypes.STRING
    },
    t4: {
      type: DataTypes.STRING
    },
    autre: {
      type: DataTypes.STRING
    }
  })
