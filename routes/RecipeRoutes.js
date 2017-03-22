const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/RecipesController');

router.get('/recipes', RecipeController.list);

router.get('/recipes:_id', RecipeController.show);

router.delete('/recipes:_id', RecipeController.remove);

router.post('/recipes', RecipeController.create);

router.put('/recipes:_id', RecipeController.update);

module.exports = router;
