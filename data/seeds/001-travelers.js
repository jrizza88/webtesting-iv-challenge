
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('travelers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('travelers').insert([
        {id: 1, name: 'Jamar'},
        {id: 2, name: 'Ryan'},
        {id: 3, name: 'Juan'},
        {id: 4, name: 'Sam'},
      ]);
    });
};
