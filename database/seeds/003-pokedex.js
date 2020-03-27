
exports.seed = function(knex) {
  return knex('pokedex')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('pokedex').insert([
        {name: 'Bulbasaur', type1: 7 , type2: 12, userId: 1},
      ]);
    });
};
