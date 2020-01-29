const mongoose = require("mongoose");

//MONGOOSE / MODEL CONFIG
const bookSchema = new mongoose.Schema({
   title: String,
   author: String,
   image: String,
   desc: String
});

module.exports = mongoose.model("bookSchema", bookSchema);