const Recipes = require('../recipeBook/models/recipes-model');

module.exports = { validateRecipeId }

//custom validator middleware

// to be used on every GET request that expects recipe id as parameter
function validateRecipeId(req, res, next) {
    const id = req.params.id;

    Recipes.findById(id)
        .then(recipe => {
            if (recipe) {
                next();
            } else {
                res.status(400)
                    .json({ message: 'Invalid recipe ID.' })
            }
        })
};