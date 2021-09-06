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
      type: DataTypes.INTEGER
    },
    // EEG
    idEEG: {
      type: DataTypes.INTEGER
    },
    // EMG
    idEMG: {
      type: DataTypes.INTEGER
    }
  })
