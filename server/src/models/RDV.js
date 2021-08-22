module.exports = (sequelize, DataTypes) =>
  sequelize.define('RDV', {
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
    }
  })
