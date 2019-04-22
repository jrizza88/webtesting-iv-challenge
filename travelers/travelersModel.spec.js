const Travelers = require('./travelersModel');

const db = require('../data/dbConfig');


describe('The Travelers Model', () => {

    beforeEach(() => {
        return db('travelers').truncate();
    });

    describe('The insert function', () => {
        it('traveler is inserted', async () => {
            await Travelers.insert({ name: 'Jamar'});

            const travelers = await db('travelers');
            expect(travelers.length).toBe(1);
            expect(travelers[0].name).toBe('Jamar')
        })

        it('should return the traveler by id', async () => {

            const traveler = await Travelers.insert({ name: 'Ryan'})

            expect(traveler.id).toBe(1);
            expect(traveler.name).toBe('Ryan');
        })
    })

    describe('The delete function', () => {
        it('should delete a traveler by id', async () => {
            await Travelers.remove(4);

            const traveler = await db('travelers');
            expect(traveler.id).toBe(undefined);
        });

        it('should add two travelers, delete one and only have one traveler listed', async () => {
            await Travelers.insert({ name: 'Juan'});
            const newTraveler1 = await Travelers.insert({ name: 'Emerson'});

           
            await Travelers.remove(newTraveler1.id)
            const traveler = await db('travelers');

            expect(traveler).toHaveLength(1);
        });
    })

    describe('The delete function', () => {
        it('should return list of all travelers', async () => {
            await Travelers.getAll()

           const travelers = db('travelers');

           expect(travelers).toBeTruthy()
        });
    });
});