const mongoose = require("mongoose");

//MONGOOSE / MODEL CONFIG
const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [
    {
      type: String
    }
  ],
  directions: [
    {
      type: String
    }
  ]
});

module.exports = mongoose.model("recipeSchema", recipeSchema);
