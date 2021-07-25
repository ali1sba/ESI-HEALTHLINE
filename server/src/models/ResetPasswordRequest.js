module.exports = (sequelize, DataTypes) =>
  sequelize.define('ResetPasswordRequest', {
    email: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    resetPasswordToken: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  })
