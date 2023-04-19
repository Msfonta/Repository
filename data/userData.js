const database = require('../infra/database')

exports.getUsuarios= function() {
    return database.query(' SELECT * FROM usuarios;')
}