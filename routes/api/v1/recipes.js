const express = require('express')
const router = express.Router()
const recipes = require('../../../data/recipes.json')

//get /api/v1/
router.get('/', (request, response) => {
    response.send(recipes.map(({ id, title, image, prepTime, difficulty }) => ({
        id, title, image, prepTime, difficulty
    })))
})

// post /api/v1/recipe/add
router.post('/recipe/add', (request, response) => {
    const addedRecipe = request.body
    addedRecipe.id = recipes.length + 1 //Generate a unique Id
    recipes.push(addedRecipe)
    response.send(addedRecipe)  //Return the added recipe
})

// get /api/v1/recipe/:id
router.get('/recipe/:id', (request, response) => {
    const recipeId = request.params.id;  
    const Result = recipes.find(recipe => recipe.id.toString() === recipeId)

    if (Result) {
        response.send(Result);
    }
})

module.exports = router
