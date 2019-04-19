
const express = require('express');

const Travelers = require('../travelers/travelersModel');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({message: 'Welcome traveler! Your server is running'})
});

server.get('/travelers', async(req, res) => {
    const travelers = await Travelers.getAll();
    res.status(200).json(travelers)
})

server.post('/travelers', async(req, res) => {
        try{
            const traveler = await Travelers.insert(req.body)
      
            res.status(201).json({traveler})
        } catch (err) {
            res.status(500).json(err)
        } 
});

server.delete('/travelers:id', async(req, res) => {
    try{
        await Travelers.remove({ id: req.params.id })
        res.status(202).json({ message: 'traveler left the group :( '})
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = server;
