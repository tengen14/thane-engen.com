const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const cors = require("cors");

const CONNECTION_URL =
  "mongodb+srv://tengen14:72Qjtb14@recipes-u0s0m.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "Portfolio";

var app = express();

app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var database, collection;

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


app.listen(5000, () => {
  MongoClient.connect(
    CONNECTION_URL,
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        throw error;
      }
      database = client.db(DATABASE_NAME);
      collection = database.collection("Recipes");
      console.log("Connected to `" + DATABASE_NAME + "`!");
    }
  );
});