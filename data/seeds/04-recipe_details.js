
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_details')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_details').insert([
        { recipe_id: 1, ingredient_id: '1', quantity: '24', unit_of_measurement: 'oz', instructions_id: '1'}
      ]);
    });
};
