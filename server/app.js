const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const cors = require("cors");

// const recipeRoutes = require("./routes/recipes.js");

const CONNECTION_URL =
  "mongodb+srv://tengen14:72Qjtb14@recipes-u0s0m.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "Portfolio";

const app = express();

app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
  app.get("/books", (req, res) => {
    bookCollection.find({}).toArray((error, result) => {
      if (error) {
        return res.status(500).send(error);
      }
      res.send(result);
    });
  });

  app.get("/books/:id", (req, res) => {
    bookCollection.findOne(
      { _id: new ObjectId(req.params.id) },
      (error, result) => {
        if (error) {
          return res.status(500).send(error);
        }
        res.send(result);
      }
    );
  });

  app.post("/books", (req, res) => {
    bookCollection.insert(req.body, (error, result) => {
      if (error) {
        return res.status(500).send(error);
      }
      res.send(result.result);
    });
  });

  app.patch("/books/:id", (req, res) => {
    const id = req.params.id;
    const recipe = req.body;
    console.log("Editing recipe: ", id, " to be ", recipe);
    bookCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: recipe },
      (error, result) => {
        if (error) throw error;
        res.send(result);
      }
    );
  });

  app.delete("/books/:id", function(req, res) {
    var id = req.params.id;

    bookCollection.deleteOne({ _id: new ObjectId(id) }, function(
      err,
      results
    ) {});

    res.json({ success: id });
  });
};

recipeRoutes();
bookRoutes();

///////////////////////////////////////////////////////
var database, recipeCollection, bookCollection;

app.listen(5000, () => {
  MongoClient.connect(
    CONNECTION_URL,
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        throw error;
      }
      database = client.db(DATABASE_NAME);
      recipeCollection = database.collection("Recipes");
      console.log("Connected to " + "Recipe Collection");
    }
  );

  MongoClient.connect(
    CONNECTION_URL,
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        throw error;
      }
      database = client.db(DATABASE_NAME);
      bookCollection = database.collection("Books");
      console.log("Connected to " + "Book Collection");
    }
  );
});
