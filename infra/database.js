const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'm1s2f3senna',
    host: 'localhost',
    port: 5432,
    database: 'testeMHR'
})

db.connect()
module.exports = db;