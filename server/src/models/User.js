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
    phoneNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING
    },
    scolarYear: {
      type: DataTypes.STRING
    },
    idCompte: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
