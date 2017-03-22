const RecipeModel = require('../models/RecipeModel');
const recipesController = {};


recipesController.list = (request, response, next) => {
  RecipeModel.find().exec()
  .then(recipe => {
    return response.json(recipe);
  })
  .catch(err => {
    return next(err);
  });
};

recipesController.show = (request, response, next) => {
  RecipeModel.findById(request.params._id).exec()
  .then(recipe => {
    return response.json(recipe);
  })
  .catch(err => {
    return next(err);
  });
};

recipesController.create = (request, response, next) => {
  const recipe = new RecipeModel({
    uri: request.body.uri,
    label: request.body.label,
    image: request.body.image,
    source: request.body.source,
    url: request.body.url,
    healthLabels: request.body.healthLabels,
    ingredientLines: request.body.ingredientLines,
    calories: request.body.calories
  });
  recipe.save()
  .then(recipe => {
    return response.json(recipe);
  })
  .catch(err => {
    return next(err);
  });
};

recipesController.update = (request, response, next) => {
  RecipeModel.findById(request.params._id)
  .then(recipe => {
    recipe.uri = request.body.uri || recipe.uri;
    recipe.label = request.body.label || recipe.label;
    recipe.image = request.body.image || recipe.image;
    recipe.source = request.body.source || recipe.source;
    recipe.url = request.body.url || recipe.url;
    recipe.healthLabels = request.body.healthLabels || recipe.healthLabels;
    recipe.ingredientLines = request.body.ingredientLines || recipe.ingredientLines;
    recipe.calories = request.body.calories || recipe.calories;

    return recipe.save();
  })
  .then(recipe => {
    return response.json(recipe);
  })
  .catch(err => {
    return next(err);
  });
};


recipesController.remove = (request, response, next) => {
  RecipeModel.findByIdAndRemove(request.params._id).exec()
  .then(recipe => {
    return response.json(recipe);
  })
  .catch(err => {
    return next(err);
  });
};

module.exports = recipesController;
