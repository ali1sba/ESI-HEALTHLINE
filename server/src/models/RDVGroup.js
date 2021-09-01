module.exports = (sequelize, DataTypes) =>
  sequelize.define('RDVGroup', {
    ScolarYear: {
      type: DataTypes.INTEGER
    },
    Group: {
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
