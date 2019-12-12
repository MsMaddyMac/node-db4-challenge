
exports.up = function(knex) {
  return knex.schema.createTable('instructions', tbl => {
    tbl.increments();

    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    
    tbl.integer('step_number')
        .unsigned()
        .notNullable();

    tbl.text('instructions')
        .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('instructions');
};
