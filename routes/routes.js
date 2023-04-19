const express = require('express');
const userService = require('../services/userServices')
const route = express.Router();

route.get('/' , async function(req, res) {
    res.send('ola mundo')
})

route.get('/usuarios', async function(req, res) {
    const users = await userService.getUsers()
    res.json(users)
})
route.get('/usuarios/:id', async function(req, res) {

})
route.post('/usuarios', async function(req, res) {

})
route.put('/usuarios/:id', async function(req, res) {

})
route.delete('/usuarios/:id', async function(req, res) {

})

module.exports = route;