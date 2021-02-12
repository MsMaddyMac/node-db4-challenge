
exports.up = function(knex) {
  return knex.schema.createTable('recipe_details', tbl => {
    tbl.increments();

    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

    tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

    tbl.float('quantity')
        .unsigned()
        .notNullable();

    tbl.string('unit_of_measurement')
        .notNullable();

    tbl.integer('instructions_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('instructions')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_details')
};
