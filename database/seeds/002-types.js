
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('types')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        {id: 1, type: 'Bug'},
        {id: 2, type: 'Dragon'},
        {id: 3, type: 'Ice'},
        {id: 4, type: 'Fighting'},
        {id: 5, type: 'Fire'},
        {id: 6, type: 'Flying'},
        {id: 7, type: 'Grass'},
        {id: 8, type: 'Ghost'},
        {id: 9, type: 'Ground'},
        {id: 10, type: 'Electric'},
        {id: 11, type: 'Normal'},
        {id: 12, type: 'Poison'},
        {id: 13, type: 'Psychic'},
        {id: 14, type: 'Rock'},
        {id: 15, type: 'Water'},
      ]);
    });
};
