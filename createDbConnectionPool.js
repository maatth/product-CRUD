const mysql = require('promise-mysql')
const config = require('./config/config.json')

module.exports = mysql.createPool({
    connectionLimit: config.db.connectionLimit,
    host: process.env.DB_HOST || config.db.host,
    database: process.env.DB_NAME || config.db.database,
    user: process.env.DB_USER || config.db.user,
    password: process.env.DB_PASSWORD || config.db.password,
    port: process.env.DB_PORT || config.db.port
})