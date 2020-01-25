const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const app = express();

const recipeRoutes = () => {
  // RECIPE ROUTES
  app.get("/recipes", (req, res) => {
    collection.find({}).toArray((error, result) => {
      if (error) {
        return res.status(500).send(error);
      }
      res.send(result);
    });
  });

  app.get("/recipes/:id", (req, res) => {
    collection.findOne(
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
    collection.insert(req.body, (error, result) => {
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
    collection.updateOne(
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

    collection.deleteOne({ _id: new ObjectId(id) }, function(err, results) {});

    res.json({ success: id });
  });
};

module.exports = recipeRoutes;
