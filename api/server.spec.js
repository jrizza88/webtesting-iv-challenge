const server = require('./server');

const request = require('supertest');

const db = require('../data/dbConfig');

describe('GET /', () => {
    
    it('should return status 200', async () => {
        
        const res = await request(server).get('/');

        expect(res.status).toBe(200);
    });

    it('should return a json message', async () => {
        const res = await request(server).get('/');

        expect(res.body).toEqual({message: 'Welcome traveler! Your server is running'})
    });

    it('should return JSON', async () => {
        const res = await request(server).get('/')

        expect(res.type).toBe('application/json');
    })
})