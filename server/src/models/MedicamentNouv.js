module.exports = (sequelize, DataTypes) =>
  sequelize.define('MedicamentNouv', {
    nom: {
      type: DataTypes.STRING,

      allowNull: false
    },
    marque: {
      type: DataTypes.STRING,
      allowNull: false
    },
    forme: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dosage: {
      type: DataTypes.STRING,
      allowNull: false
    }

  })
