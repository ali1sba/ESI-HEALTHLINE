module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansElectrique', {
    motif: {
      type: DataTypes.STRING
    },
    idPatient: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // ECG
    idECG: {
      type: DataTypes.INTEGER,
      unique: true
    },
    // EEG
    idEEG: {
      type: DataTypes.INTEGER,
      unique: true
    },
    // EMG
    idEMG: {
      type: DataTypes.INTEGER,
      unique: true
    }
  })
