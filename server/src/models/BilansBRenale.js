module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansBRenale', {
    urée: {
      type: DataTypes.STRING
    },
    creatinine: {
      type: DataTypes.STRING
    },
    clairanceDeLaCreatinine: {
      type: DataTypes.STRING
    },
    autre: {
      type: DataTypes.STRING
    }
  })
