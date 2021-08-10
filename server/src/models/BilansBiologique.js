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
      allowNull: true
    },
    // Bilan Inflammatoire
    idBI: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    // Bilan Rénale
    idBR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    // Bilan Hépathique
    idBH: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    // Bilan Cardiaque
    idBC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    // Ionogramme sanguin et urinaire
    idIo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    // Bilan Glycémique
    idBG: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    // Bilan Lipidique
    idBL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    // Bilan Urinaire
    idBU: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    // Bilan Hormonal
    idBHor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    // Bilan Sérologie
    idBS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    autre: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })
