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
      type: DataTypes.INTEGER,
      unique: true
    },
    biometricInfoId: {
      type: DataTypes.INTEGER,
      unique: true
    },
    antecedentsInfoId: {
      type: DataTypes.INTEGER,
      unique: true
    },
    screeningInfoId: {
      type: DataTypes.INTEGER,
      unique: true
    }
  })
