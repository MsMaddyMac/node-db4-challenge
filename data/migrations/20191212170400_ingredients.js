
exports.up = function(knex) {
  return knex.schema.createTable('ingredients', tbl => {
      tbl.increments();

      tbl.string('ingredient_name')
        .notNullable()
        .unique()
        .index();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredients');
};
