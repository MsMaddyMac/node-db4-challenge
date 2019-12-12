
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: '1', step_number: '1', instructions: 'Put CB in cup. The bigger, the better!' }
      ]);
    });
};
