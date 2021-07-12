const path = require('path')

module.exports = {
  port: process.env.PORT || 8083,
  db: {
    database: process.env.DB_NAME || 'HealthLineDB',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../HealthLineDB.sqlite')
    }
  }
}
