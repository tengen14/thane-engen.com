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

app.get("/recipes", (request, response) => {
  collection.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
});

app.get("/recipes/:id", (request, response) => {
  collection.findOne(
    { _id: new ObjectId(request.params.id) },
    (error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
      response.send(result);
    }
  );
});

app.post("/recipes", (request, response) => {
  collection.insert(request.body, (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result.result);
  });
});

// app.put("/recipes/:id", (request, response) => {
//     const recipeId = request.params.id;
//     const recipe = request.body;
//     console.log("Editing recipe: ", recipeId, " to be ", recipe);

//     collection.updateOne({ id: recipeId }, { $set: recipe }, (error, result) => {
//         if (error) throw error;
//         // // send back entire updated list, to make sure frontend data is up-to-date
//         // dbCollection.find().toArray(function(_error, _result) {
//         //     if (_error) throw _error;
//         //     response.json(_result);
//         // });
//   });
// });

app.delete("/recipes/:id", function(req, res) {
  var id = req.params.id;
  // var collection = db.get().collection("menu");

  collection.deleteOne({ _id: new ObjectId(id) }, function(
    err,
    results
  ) {});

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
