module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false
    },
    sexe: {
      type: DataTypes.ENUM('HOMME', 'FEMME'),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING
    },
    scolarYear: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.ENUM('ADMIN', 'ADMINISTRATION', 'MED', 'ASSIS', 'PATIENT'),
      allowNull: false
    }
  })
