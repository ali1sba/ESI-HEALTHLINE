module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansBUrinaire', {
    // Bandelette urinaire
    bu: {
      type: DataTypes.STRING
    },
    // Germe (texte)
    ecbu: {
      type: DataTypes.STRING
    }
  })
