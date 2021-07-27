module.exports = (sequelize, DataTypes) =>
  sequelize.define('MedicalFile', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    personalInfoId: {
      type: DataTypes.STRING
    },
    biometricInfoId: {
      type: DataTypes.STRING
    },
    antecedentsInfoId: {
      type: DataTypes.STRING
    },
    screeningInfoId: {
      type: DataTypes.STRING
    }
  })
