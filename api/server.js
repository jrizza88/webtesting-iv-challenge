
const express = require('express');

// const travelers = require('../travelers/travelersModel');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({message: 'Welcome traveler! Your server is running'})
});

// server.get('/travelers', async(req, res) => {
//     res.status(200).json()
// })

module.exports = server;
