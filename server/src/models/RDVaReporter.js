module.exports = (sequelize, DataTypes) =>
  sequelize.define('RDVaReporter', {
    idUser: {
      type: DataTypes.INTEGER
    },
    DateAndTime: {
      type: DataTypes.STRING
    },
    Type: {
      type: DataTypes.STRING
    },
    Note: {
      type: DataTypes.STRING
    },
    GroupORIndiv: {
      type: DataTypes.STRING
    }
  })
