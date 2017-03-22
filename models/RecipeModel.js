const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  uri: {
    required: true,
    type: String
  },
  label: {
    required: true,
    type: String
  },
  image: {
    required: true,
    type: String
  },
  source: {
    required: true,
    type: String
  },
  url: {
    required: true,
    type: String
  },
  healthLabels: {
    required: true,
    type: Array
  },
  ingredientLines: {
    required: true,
    type: Array
  },
  calories: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model('Recipe', recipeSchema);
