const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

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
  }, {
    hooks: {
      beforeUpdate: hashPassword
    }
  })

  Compte.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }

  return Compte
}
