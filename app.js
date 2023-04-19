const express = require('express')
const app = express()
// const Client = require('pg').Client
// const cliente = new Client({})

app.use('/', require('./routes/routes'))

app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000!')
})