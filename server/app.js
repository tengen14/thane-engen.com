// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const MongoClient = require("mongodb").MongoClient;
// const ObjectId = require("mongodb").ObjectID;

// const routes = require("./routes/index");
// const recipesRoute = require("./routes/recipes");

// require("dotenv").config();

// let app = express();

// const PORT = process.env.PORT || 5000;
// const dbURL = process.env.MONGO_DB_URL;
// const DATABASE_NAME = "Portfolio";

// app.use(cors());
// app.options("*", cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect(dbURL, function(err) {
//   if (err) {
//     console.log("Error connecting to: " + dbURL);
//   } else {
//     console.log("Connected to: " + dbURL);
//   }
// });

// app.use("/", routes);
// app.use("/recipes", recipesRoute);

// app.post("/person", (request, response) => {
//   collection.insert(request.body, (error, result) => {
//       if(error) {
//           return response.status(500).send(error);
//       }
//       response.send(result.result);
//   });
// });

// var database, collection;

// app.listen(PORT, function() {
//   MongoClient.connect(
//     dbURL,
//     { useNewUrlParser: true },
//     (error, client) => {
//       if (error) {
//         throw error;
//       }
//       database = client.db(DATABASE_NAME);
//       collection = database.collection("Recipes");
//       console.log("Connected to `" + DATABASE_NAME + "`!");
//     }
//   );
// });

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
      if(error) {
          return response.status(500).send(error);
      }
      response.send(result.result);
  });
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
