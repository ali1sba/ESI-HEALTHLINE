module.exports = (sequelize, DataTypes) =>
  sequelize.define('MedicalFile', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    idUser: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
    personalInfoId: {
      type: DataTypes.STRING,
      unique: true
    },
    biometricInfoId: {
      type: DataTypes.STRING,
      unique: true
    },
    antecedentsInfoId: {
      type: DataTypes.STRING,
      unique: true
    },
    screeningInfoId: {
      type: DataTypes.STRING,
      unique: true
    }
  })
