module.exports = (sequelize, DataTypes) =>
  sequelize.define('ExamenClinique', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    temp: {
      type: DataTypes.STRING
    },
    peau: {
      type: DataTypes.STRING
    },
    anomaliePeau: {
      type: DataTypes.STRING
    },
    inspCardio: {
      type: DataTypes.STRING
    },
    auscuCardio: {
      type: DataTypes.STRING
    },
    anomalieSouffle: {
      type: DataTypes.STRING
    },
    anomalieType: {
      type: DataTypes.STRING
    },
    anomalieBruits: {
      type: DataTypes.STRING
    },
    poulsPeri: {
      type: DataTypes.STRING
    },
    anomaliePoulsPeri: {
      type: DataTypes.STRING
    },
    tensionArt: {
      type: DataTypes.STRING
    },
    freqCard: {
      type: DataTypes.STRING
    },
    inspPulmo: {
      type: DataTypes.STRING
    },
    freqPulmo: {
      type: DataTypes.STRING
    },
    palpPulmo: {
      type: DataTypes.STRING
    },
    anomaliePalpPulmo: {
      type: DataTypes.STRING
    },
    percuPulmo: {
      type: DataTypes.STRING
    },
    anomaliePercuPulmo: {
      type: DataTypes.STRING
    },
    ascuPulmo: {
      type: DataTypes.STRING
    },
    murmurViscu: {
      type: DataTypes.STRING
    },
    checkedRales: {
      type: DataTypes.STRING
    },
    locaRales: {
      type: DataTypes.STRING
    },
    inspAbdo: {
      type: DataTypes.STRING
    },
    anomalieAbdo: {
      type: DataTypes.STRING
    },
    pulpAbdo: {
      type: DataTypes.STRING
    },
    pulpMasse: {
      type: DataTypes.STRING
    },
    localiMasse: {
      type: DataTypes.STRING
    },
    ralesMasse: {
      type: DataTypes.STRING
    },
    autreMasse: {
      type: DataTypes.STRING
    },
    percuAbdo: {
      type: DataTypes.STRING
    },
    sensiNeuro: {
      type: DataTypes.STRING
    },
    anomalieSensiNeuro: {
      type: DataTypes.STRING
    },
    matriNeuro: {
      type: DataTypes.STRING
    },
    anomalieMatriNeuro: {
      type: DataTypes.STRING
    },
    troublesNeuro: {
      type: DataTypes.STRING
    },
    anomalieTroublesNeuro: {
      type: DataTypes.STRING
    },
    orientNeuro: {
      type: DataTypes.STRING
    },
    anomalieOrientNeuro: {
      type: DataTypes.STRING
    },
    gorgeORL: {
      type: DataTypes.STRING
    },
    auricuORL: {
      type: DataTypes.STRING
    },
    examenUrogeni: {
      type: DataTypes.STRING
    },
    remarqueCLI: {
      type: DataTypes.STRING
    }
  })
