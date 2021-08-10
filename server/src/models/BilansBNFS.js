module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansBNFS', {
    // globules rouges
    gr: {
      type: DataTypes.STRING,
    },
    // globules blanches-PNN
    gbPNN: {
      type: DataTypes.STRING,
    },
    // globules blanches-PNEo
    gbPNEo: {
      type: DataTypes.INTEGER,
    },
    // globules blanches-PNB
    gbPNB: {
      type: DataTypes.STRING,
    },
    // globules blanches-Lymphocytes
    gbLymphocytes: {
      type: DataTypes.STRING,
    },
    // globules blanches-Monocytes
    gbMonocytes: {
      type: DataTypes.STRING,
    },
    // plaquettes
    plaquettes: {
      type: DataTypes.STRING,
    }
  })
