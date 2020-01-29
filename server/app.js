const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;
const cors = require("cors");

const bookSchema = require("./models/bookSchema");
const bookSeedDB = require("./seedDBs/bookSeedDB");

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/portfolio");

app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

bookSeedDB();

// RECIPE ROUTES
const recipeRoutes = () => {
  app.get("/recipes", (req, res) => {
    recipeCollection.find({}).toArray((error, result) => {
      if (error) {
        return res.status(500).send(error);
      }
      res.send(result);
    });
  });

  app.get("/recipes/:id", (req, res) => {
    recipeCollection.findOne(
      { _id: new ObjectId(req.params.id) },
      (error, result) => {
        if (error) {
          return res.status(500).send(error);
        }
        res.send(result);
      }
    );
  });

  app.post("/recipes", (req, res) => {
    recipeCollection.insert(req.body, (error, result) => {
      if (error) {
        return res.status(500).send(error);
      }
      res.send(result.result);
    });
  });

  app.patch("/recipes/:id", (req, res) => {
    const id = req.params.id;
    const recipe = req.body;
    console.log("Editing recipe: ", id, " to be ", recipe);
    recipeCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: recipe },
      (error, result) => {
        if (error) throw error;
        res.send(result);
      }
    );
  });

  app.delete("/recipes/:id", function(req, res) {
    var id = req.params.id;

    recipeCollection.deleteOne({ _id: new ObjectId(id) }, function(
      err,
      results
    ) {});

    res.json({ success: id });
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
var database, recipeCollection, bookCollection;

app.listen(5000, () => {
  console.log("=====================================");
  console.log("(  SERVER STARTED  )");
  console.log("=====================================");
});
