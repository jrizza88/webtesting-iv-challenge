const db = require('../data/dbConfig');

module.exports = {
    insert,
    remove,
    getAll
};

async function insert(traveler) {
    const [id] = await db('travelers').insert(traveler);

    return db('travelers')
        .where({ id })
        .first();
}

function remove(id) {
    return db('travelers')
        .where({ id })
        .del()
}

function getAll() {
    return db('travelers');
}