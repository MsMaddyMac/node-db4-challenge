
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Peppermint Mocha Cold Brew' },
        { name: 'Salted Caramel Cold Brew' },
        { name: 'Peppermint Mocha Iced Coffee' }
      ]);
    });
};
