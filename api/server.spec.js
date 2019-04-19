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

describe('GET /travelers', () => {
    
    it('should return status 200 for travelers endpoint', async () => {
    
        const res = await request(server).get('/travelers');
        expect(res.status).toBe(200);
    });

    it('should return JSON of all listed travelers', async () => {
        const res = await request(server).get('/travelers')

        expect(res.type).toBe('application/json');
    })
})

describe('POST /travelers',async () => {
    
    it('should return status 201 for new traveler', async () => {
        const res = await request(server).post('/travelers')
            .send({ name: 'Emerson'})
        expect(res.status).toBe(201);
    });
})

describe('DELETE /travelers',async () => {
    
    it('should return the right response', async () => {
    
        const res = await request(server).delete('/travelers:id');

        expect(res.status).toBe(202);
    });

})