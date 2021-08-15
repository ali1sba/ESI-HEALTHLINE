module.exports = (sequelize, DataTypes) =>
  sequelize.define('Medicament', {
    nom: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }

  })
