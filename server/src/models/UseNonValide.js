module.exports = (sequelize, DataTypes) =>
  sequelize.define('UserNonValide', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
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
    password2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    scolarYear: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
