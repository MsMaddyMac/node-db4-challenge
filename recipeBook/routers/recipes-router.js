const express = require('express');

const Recipes = require('../models/recipes-model');

const router = express.Router();

// Endpoint for GET request to retrieve all recipes in db
router.get('/', (req, res) => {
    Recipes.getRecipes(req.query)
    .then(recipes => {
        res
        .status(200)
        .json(recipes);
    })
    .catch(err => {
        console.log('Issue retrieving recipes.', err);
        res
        .status(500)
        .json({ error: 'Error retrieving recipes.' })
    });
});

// Endpoint for GET request which retrieves a list of all ingredients and quantities for a single recipe
router.get('/:id/shoppingList', (req, res) => {
    const id = req.params.id;

    Recipes.getShoppingList(id)
    .then(list => {
        res.status(200).json(list);
    })
    .catch(err => {
        console.log('Error getting list.', err);
        res.status(500).json({ error: 'Error retrieving List.' });
    });
});

// Endpoint for GET request which retrieves step by step instructions for a recipe
router.get('/:id/instructions', (req, res) => {
    const id = req.params.id;

    Recipes.getInstructions(id)
    .then(steps => {
        res.status(200).json(steps);
    })
    .catch(err => {
        console.log('Error getting instructions.', err);
        res.status(500).json({ error: 'Error retrieving instructions.' });
    });
});

module.exports = router;