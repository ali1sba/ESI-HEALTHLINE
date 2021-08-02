module.exports = (sequelize, DataTypes) =>
  sequelize.define('antecedentsInfo', {
    boolFumer: {
      type: DataTypes.STRING
    },
    boolChiquer: {
      type: DataTypes.STRING
    },
    boolPrise: {
      type: DataTypes.STRING
    },
    ancienFum: {
      type: DataTypes.STRING
    },
    nbrFumer: {
      type: DataTypes.INTEGER
    },
    nbrChiquer: {
      type: DataTypes.INTEGER
    },
    nbrPrise: {
      type: DataTypes.INTEGER
    },
    perExpo: {
      type: DataTypes.INTEGER
    },
    alcool: {
      type: DataTypes.STRING
    },
    medicat: {
      type: DataTypes.STRING
    },
    autres: {
      type: DataTypes.STRING
    },
    addresse: {
      type: DataTypes.STRING
    },
    affec: {
      type: DataTypes.STRING
    },
    malaGene: {
      type: DataTypes.STRING
    },
    intChiru: {
      type: DataTypes.STRING
    },
    reactMed: {
      type: DataTypes.STRING
    }
  })
