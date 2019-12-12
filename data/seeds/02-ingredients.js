
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'Cold Brew Coffee' },
        { ingredient_name: 'Peppermint Mocha Flavor Syrup' },
        { ingredient_name: 'Salted Caramel Flavor Syrup' },
        { ingredient_name: 'Salted Caramel Drizzle' },
        { ingredient_name: 'Chocalate Drizzle' },
        { ingredient_name: 'Heavy Whipping Cream' },
        { ingredient_name: "Ice" }
      ]);
    });
};
