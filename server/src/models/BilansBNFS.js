module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansBNFS', {
    // globules rouges
    gr: {
      type: DataTypes.STRING
    },
    // globules blancs-PNN
    gbPNN: {
      type: DataTypes.STRING
    },
    // globules blancs-PNEo
    gbPNEo: {
      type: DataTypes.STRING
    },
    // globules blancs-PNB
    gbPNB: {
      type: DataTypes.STRING
    },
    // globules blancs-Lymphocytes
    gbLymphocytes: {
      type: DataTypes.STRING
    },
    // globules blancs-Monocytes
    gbMonocytes: {
      type: DataTypes.STRING
    },
    // plaquettes
    plaquettes: {
      type: DataTypes.STRING
    }
  })
