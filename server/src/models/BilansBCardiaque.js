module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansBCardiaque', {
    ckmb: {
      type: DataTypes.STRING,
    },
    myoglobine: {
      type: DataTypes.STRING,
    },
    troponine: {
      type: DataTypes.INTEGER,
    },
    bnp: {
      type: DataTypes.STRING,
    },
    autre: {
      type: DataTypes.STRING,
    }
  })
