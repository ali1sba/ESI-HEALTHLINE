module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansBHepathique', {
    // TGO or ASAT
    tgo: {
      type: DataTypes.STRING,
    },
    // TGP or ALAT
    tgp: {
      type: DataTypes.STRING,
    },
    phosphataseAlcaline: {
      type: DataTypes.INTEGER,
    },
    // Bilan d'hémostase -> TS-TP-TCA
    ts: {
      type: DataTypes.STRING,
    },
    tp: {
      type: DataTypes.STRING,
    },
    tca: {
      type: DataTypes.STRING,
    },
    bilirubine: {
      type: DataTypes.STRING,
    },
    ldh: {
      type: DataTypes.STRING,
    },
    albumine: {
      type: DataTypes.STRING,
    },
    gammeGT: {
      type: DataTypes.STRING,
    },
    autre: {
      type: DataTypes.STRING,
    }
  })
