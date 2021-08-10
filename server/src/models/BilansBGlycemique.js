module.exports = (sequelize, DataTypes) =>
  sequelize.define('BilansBGlycemique', {
    // Glycémie à jeun
    glyJ: {
      type: DataTypes.STRING,
    },
    // Hb1c
    hb1c: {
      type: DataTypes.STRING,
    },
    autre: {
      type: DataTypes.STRING,
    }
  })
