module.exports = (sequelize, DataTypes) =>
  sequelize.define('PersonalInfo', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    placeOfBirth: {
      type: DataTypes.STRING
    },
    sexe: {
      type: DataTypes.ENUM('HOMME', 'FEMME'),
      allowNull: false
    },
    bloodGroup: {
      type: DataTypes.ENUM('O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-')
    },
    addresse: {
      type: DataTypes.STRING
    },
    phoneNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    numSS: {
      type: DataTypes.STRING,
      unique: true
    },
    scolarYear: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    }
  })
