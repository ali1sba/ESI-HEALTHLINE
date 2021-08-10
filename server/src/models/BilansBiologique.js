module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansBiologique', {
    motif: {
      type: DataTypes.STRING
    },
    idPatient: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Bilan NFS
    idNFS: {
      type: DataTypes.INTEGER,
      unique: true
    },
    // Bilan Inflammatoire
    idBI: {
      type: DataTypes.INTEGER,
      unique: true
    },
    // Bilan Rénale
    idBR: {
      type: DataTypes.INTEGER,
      unique: true
    },
    // Bilan Hépathique
    idBH: {
      type: DataTypes.INTEGER,
      unique: true
    },
    // Bilan Cardiaque
    idBC: {
      type: DataTypes.INTEGER,
      unique: true
    },
    // Ionogramme sanguin et urinaire
    idIo: {
      type: DataTypes.INTEGER,
      unique: true
    },
    // Bilan Glycémique
    idBG: {
      type: DataTypes.INTEGER,
      unique: true
    },
    // Bilan Lipidique
    idBL: {
      type: DataTypes.INTEGER,
      unique: true
    },
    // Bilan Urinaire
    idBU: {
      type: DataTypes.INTEGER,
      unique: true
    },
    // Bilan Hormonal
    idBHor: {
      type: DataTypes.INTEGER,
      unique: true
    },
    // Bilan Sérologie
    idBS: {
      type: DataTypes.INTEGER,
      unique: true
    },
    autre: {
      type: DataTypes.STRING
    }
  })
