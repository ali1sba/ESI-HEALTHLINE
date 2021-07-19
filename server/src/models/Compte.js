const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

module.exports = (sequelize, DataTypes) => {
  const Compte = sequelize.define('Compte', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('ADMIN', 'ADMINISTRATION', 'MED', 'ASSIS', 'PATIENT'),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING
    }
  })

  Compte.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }

  return Compte
}
