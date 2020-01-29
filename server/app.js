const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const bookSchema = require("./models/bookSchema");
const recipeSchema = require("./models/recipeSchema");

const bookSeedDB = require("./seedDBs/bookSeedDB");
const recipeSeedDB = require("./seedDBs/recipeSeedDB");

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/portfolio");

app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

bookSeedDB();
recipeSeedDB();


// RECIPE ROUTES
const recipeRoutes = () => {
  app.get("/recipes", async (req, res) => {
    try {
      const result = await recipeSchema.find().exec();
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.get("/recipes/:id", async (req, res) => {
    try {
      const recipe = await recipeSchema.findById(req.params.id).exec();
      res.send(recipe);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.post("/recipes", async (req, res) => {
    try {
      const recipe = new recipeSchema(req.body);
      const result = await recipe.save();
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.patch("/recipes/:id", async (req, res) => {
    try {
      const recipe = await recipeSchema.findById(req.params.id).exec();
      recipe.set(req.body);
      const result = await recipe.save();
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.delete("/recipes/:id", async (req, res) => {
    try {
      const result = await recipeSchema
        .deleteOne({
          _id: req.params.id
        })
        .exec();
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  });
};
// BOOK ROUTES
const bookRoutes = () => {
  app.get("/books", async (req, res) => {
    try {
      const result = await bookSchema.find().exec();
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.get("/books/:id", async (req, res) => {
    try {
      const book = await bookSchema.findById(req.params.id).exec();
      res.send(book);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.post("/books", async (req, res) => {
    try {
      const book = new bookSchema(req.body);
      const result = await book.save();
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.patch("/books/:id", async (req, res) => {
    try {
      const book = await bookSchema.findById(req.params.id).exec();
      book.set(req.body);
      const result = await book.save();
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.delete("/books/:id", async (req, res) => {
    try {
      const result = await bookSchema
        .deleteOne({
          _id: req.params.id
        })
        .exec();
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  });
};

recipeRoutes();
bookRoutes();

///////////////////////////////////////////////////////

app.listen(5000, () => {
  console.log("=====================================");
  console.log("(  SERVER STARTED  )");
  console.log("=====================================");
});
