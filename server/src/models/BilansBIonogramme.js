module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansBIonogramme', {
    // Na+ sanguin
    naS: {
      type: DataTypes.STRING
    },
    // K+ sanguin
    kS: {
      type: DataTypes.STRING
    },
    // Ca2+ sanguin
    caS: {
      type: DataTypes.STRING
    },
    // Cl- sanguin
    clS: {
      type: DataTypes.STRING
    },
    // Na+ urinaire
    naU: {
      type: DataTypes.STRING
    },
    // K+ urinaire
    kU: {
      type: DataTypes.STRING
    }
  })
