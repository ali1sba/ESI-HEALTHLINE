module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansRadiologique', {
    motif: {
      type: DataTypes.STRING
    },
    idPatient: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Radiographie Standard
    idRS: {
      type: DataTypes.INTEGER,
      unique: true
    },
    // Scanner
    idSc: {
      type: DataTypes.INTEGER,
      unique: true
    },
    // IRM
    idIRM: {
      type: DataTypes.INTEGER,
      unique: true
    },
    // Echographie & Echo-doppler
    idEcho: {
      type: DataTypes.INTEGER,
      unique: true
    },
    // Artériographie
    idArt: {
      type: DataTypes.INTEGER,
      unique: true
    },
    idAutre: {
      type: DataTypes.INTEGER,
      unique: true
    }
  })
