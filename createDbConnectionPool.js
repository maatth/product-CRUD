const mysql = require('promise-mysql')
const config = require('./config/config.json')

module.exports = mysql.createPool({
    connectionLimit: config.db.connectionLimit,
    host: config.db.host,
    database: config.db.database,
    user: config.db.user,
    password: config.db.password,
})