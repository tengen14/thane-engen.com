const mongoose = require("mongoose");

const RecipesSchema = new mongoose.Schema({
  _id: String,
  title: String,
  ingredients: String,
  directions: String
});

mongoose.model("Recipes", RecipesSchema);

module.exports = mongoose.model("Recipes");
