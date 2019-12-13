const db = require('../../data/dbConfig');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    findById
};

function getRecipes(query) {
    let { page = 1, limit = 5, sortby = 'id', sortdir = 'asc' } = query;
    const offset = limit * (page - 1);

    let rows = db('recipes')
    .orderBy(sortby, sortdir)
    .limit(limit)
    .offset(offset);

    return rows;
}

function getShoppingList(recipe_id) {
    return db('recipes as r')
        .join('recipe_details as rd', 'r.id', 'rd.recipe_id')
        .join('ingredients as i', 'rd.ingredient_id', 'i.id')
        .select('rd.quantity as quantity', 'i.ingredient_name as ingredientName')
        .where({ recipe_id: recipe_id });
}

function getInstructions(recipe_id) {
    return db('recipes as r')
        .join('instructions as i', 'r.id', 'i.recipe_id')
        .select('i.step_number as stepNumber', 'i.instructions as instructions')
        .where({ recipe_id: recipe_id });
}
function findById(id) {
    return db('recipes')
        .where({ id })
        .first();
}