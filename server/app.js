const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const cors = require("cors");

const recipeData = [
  {
    id: 1,
    title: "Macaroni & Cheese",
    ingredients: [
      "4 tablespoons unsalted butter",
      "divided ¾ cup panko (Japanese breadcrumbs)",
      "¼ ounce Parmesan, finely grated (about ¼ cup)",
      "2 teaspoons fresh thyme leaves",
      "1 teaspoon kosher salt, divided, plus more",
      "8 ounces cavatappi or other short curly pasta",
      "2 ½ cups whole milk",
      "½ small onion, grated",
      "1 garlic clove, finely grated",
      "2 tablespoons all-purpose flour",
      "4 ounces Fontina cheese, grated (about 1 cup)",
      "4 ounces Gruyère, grated (about 1 cup)",
      "4 ounces sharp white cheddar, grated (about 1 cup)",
      "½ teaspoon English mustard powder (such as Colman’s)",
      "Pinch of cayenne pepper"
    ],
    directions: [
      "Preheat oven to 350°. Melt 2 Tbsp. butter in a medium skillet over medium heat. Add panko and cook, stirring, until crumbs are golden brown, 6–8 minutes (make sure to get them toasty brown; they won’t darken much during baking). Transfer to a small bowl and toss with Parmesan, thyme leaves, and ¼ tsp. salt.",
      "Cook pasta in a large pot of boiling salted water, stirring occasionally, until al dente (the noodles will continue to cook in the cheese sauce, so take them out a minute or two before you think they’re actually done). Drain pasta; let cool while you make the sauce.",
      "Bring milk to a bare simmer in a small saucepan; keep warm. Melt remaining 2 Tbsp. butter in a medium saucepan over medium-high. Add onion and garlic and cook, stirring, until onions are fragrant and beginning to soften, about 2 minutes. Sprinkle flour over and cook, stirring constantly, until mixture starts to stick to bottom of saucepan, about 1 minute. Add warm milk in a few additions, whisking to combine after each addition.",
      "Bring béchamel sauce to a boil, then reduce heat and simmer, stirring, until sauce is thickened and doesn’t feel grainy when a little bit is rubbed between your fingers, 6–8 minutes (cooking the flour thoroughly at this stage ensures a creamy sauce). Add Fontina, Gruyère, cheddar, mustard powder, cayenne, and ¾ tsp. salt and stir until cheeses are melted and sauce is smooth. Remove from heat and mix in pasta; transfer to a 2-qt. baking dish.",
      "Bake 10 minutes. Top with Parmesan breadcrumbs and bake until sauce is bubbling around the edges, 8–10 minutes longer. Let cool in pan 15 minutes before serving."
    ]
  },
  {
    id: 2,
    title: "Chicken Noodle Soup",
    ingredients: [
      "1 tablespoon kosher salt",
      "10 whole black peppercorns",
      "4 medium carrots, peeled, halved crosswise",
      "2 celery stalks, cut into 3 pieces",
      "2 onions, cut into eighths",
      "2 bay leaves",
      "3 sprigs thyme",
      "3 sprigs flat-leaf parsley",
      "1 1-inch piece peeled fresh ginger, smashed",
      "1 4-pound chicken",
      "4 cups low-salt chicken broth",
      "1 cup egg noodles",
      "3 tablespoons finely chopped flat-leaf parsley"
    ],
    directions: [
      "Combine salt, peppercorns, carrots, celery, onions, bay leaves, thyme sprigs, parsley sprigs, and ginger in the pressure cooker pot. Place chicken on top; add broth and 3 cups water. (The liquid should not rise above the 2/3 marker.) Lock lid in place, making sure vent is sealed. Press Warm; set timer for 24 minutes and press Start to cook.",
      "Let pressure release naturally. Remove lid and transfer chicken to a platter to cool. Strain broth into a large bowl. Remove carrots and let cool completely; discard other solids from strainer. Slice carrots into rounds. Remove skin from chicken and shred meat from the bones. Discard skin and bones.",
      "Return broth to the pot. Press Warm; set timer for 20 minutes (add or subtract time as needed) and press Start. Bring to a boil; add shredded chicken, carrot rounds, and noodles and cook until noodles are al dente, about 10 minutes, depending on thickness of noodles. Press Cancel to stop cooking. Ladle soup into bowls and garnish with chopped parsley."
    ]
  },
  {
    id: 3,
    title: "Banana Bread",
    ingredients: [
      "Nonstick vegetable oil spray",
      "1½ cups all-purpose flour",
      "1¼ teaspoons baking soda",
      "¾ teaspoon kosher salt",
      "1 cup (packed) dark brown sugar",
      "⅓ cup mascarpone, plain whole-milk Greek yogurt, or sour cream",
      "¼ cup (½ stick) unsalted butter, room temperature",
      "2 large eggs",
      "4 large very ripe bananas, mashed (about 1½ cups)",
      "½ cup chopped bittersweet or semisweet chocolate (optional)",
      "½ cup chopped walnuts (optional)"
    ],
    directions: [
      "Preheat oven to 350°. Lightly coat 8½x4½ loaf pan with nonstick spray and line with parchment paper, leaving a generous overhang on long sides. Whisk flour, baking soda, and salt in a medium bowl.",
      "Using an electric mixer on medium-high speed, beat brown sugar, mascarpone, and butter in a large bowl until light and fluffy, about 4 minutes. Add eggs one at a time, beating to blend after each addition and scraping down sides and bottom of bowl as needed.",
      "Reduce speed to low, add flour mixture, and mix until just combined. Add bananas and mix just until combined. Fold in chocolate and/or walnuts, if using. Scrape batter into prepared pan; smooth top.",
      "Bake bread until a tester inserted into the center comes out clean, 60–65 minutes. Transfer pan to a wire rack and let bread cool in pan 1 hour. Turn out bread and let cool completely (if you can resist) before slicing."
    ]
  },
  {
    id: 4,
    title: "Mussels",
    ingredients: [
      "3 tablespoons olive oil",
      "6 small shallots, thinly sliced",
      "6 garlic cloves, thinly sliced",
      "2 cups dry white wine",
      "5 pounds mussels, scrubbed, debearded",
      "6 tablespoons (3/4 stick) unsalted butter, cut into pieces",
      "2 tablespoons chopped fresh dill plus more for serving",
      "2 tablespoons chopped fresh flat-leaf parsley plus more for serving",
      "Kosher salt, freshly ground pepper"
    ],
    directions: [
      "Heat oil in a large heavy pot over medium heat. Add shallots and garlic and cook, stirring occasionally, until softened not browned, about 5 minutes. Add wine and bring to a boil. Reduce heat and simmer until liquid is reduced by half, 3-4 minutes. Add mussels, cover, and cook, shaking pot occasionally, until shells open (discard any that do not open), 10–12 minutes. Using a slotted spoon, transfer mussels to shallow bowls.",
      "Add butter to cooking liquid and stir until melted. Add 2 Tbsp. dill and 2 Tbsp. parsley; season with salt and pepper. Ladle cooking liquid over mussels and top with more herbs."
    ]
  }
];
const recipeSeedDB = () => {
  //Remove all data in database
  for (let i = 0; i <= 50; i++) {
    recipeCollection.deleteOne({}, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("DELETED RECIPE");
      }
      if (i === 50) {
        recipeData.forEach(function(seed) {
          recipeCollection.insert(seed, function(err, Schema) {
            if (err) {
              console.log(err);
            } else {
              console.log("added RECIPE data!");
            }
          });
        });
      }
    });
  }
  //add data to database
};
const bookData = [
  {
    title: "The Sirens of Titan",
    author: "Kurt Vonnegut",
    image: "https://images-na.ssl-images-amazon.com/images/I/7146xazNxtL.jpg",
    desc:
      "The Sirens of Titan is a comic science fiction novel by Kurt Vonnegut, Jr., first published in 1959. His second novel, it involves issues of free will, omniscience, and the overall purpose of human history. Much of the story revolves around a Martian invasion of Earth. The Sirens of Titan largely deals with questions of free will, with multiple characters being stripped of it and the revelation that humanity had been secretly manipulated for millennia for an inane purpose playing major roles in the story. Free will and the lack thereof became major themes in Vonnegut's later novels, especially Slaughterhouse-Five (1969) and Breakfast of Champions (1972). More broadly speaking, lack of agency has been a hallmark of Vonnegut's novels, with the protagonists struggling against forces they can never overcome and often can't comprehend. None of the characters in The Sirens of Titan have chosen to be in their position, but are driven by forces and wills beside their own, and can do no more than try to make the best of it. At the end of the book Constant concluded, A purpose of human life, no matter who is controlling it, is to love whoever is around to be loved."
  },
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    image: "https://images-na.ssl-images-amazon.com/images/I/71HH78NM3PL.jpg",
    desc:
      "The story takes place in France, Italy, and islands in the Mediterranean during the historical events of 1815–1839: the era of the Bourbon Restoration through the reign of Louis-Philippe of France. It begins just before the Hundred Days period (when Napoleon returned to power after his exile). The historical setting is a fundamental element of the book, an adventure story primarily concerned with themes of hope, justice, vengeance, mercy, and forgiveness. It centres on a man who is wrongfully imprisoned, escapes from jail, acquires a fortune, and sets about exacting revenge on those responsible for his imprisonment. His plans have devastating consequences for both the innocent and the guilty."
  },
  {
    title: "The Stranger",
    author: "Albert Camus",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51EVK-ibmtL._SX322_BO1,204,203,200_.jpg",
    desc:
      "The title character is Meursault, an indifferent French Algerian described as a citizen of France domiciled in North Africa, a man of the Mediterranean, an homme du midi yet one who hardly partakes of the traditional Mediterranean culture. He attends his mother's funeral. A few days later, he kills an Arab man in French Algiers, who was involved in a conflict with a friend. Meursault is tried and sentenced to death. The story is divided into two parts, presenting Meursault's first-person narrative view before and after the murder, respectively."
  }
];
const bookSeedDB = () => {
  //Remove all data in database
  for (let i = 0; i <= 50; i++) {
    bookCollection.deleteOne({}, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("DELETED BOOK");
      }
      if (i === 50) {
        bookData.forEach(function(seed) {
          bookCollection.insert(seed, function(err, Schema) {
            if (err) {
              console.log(err);
            } else {
              console.log("added BOOK data!");
            }
          });
        });
      }
    });
  }
  //add data to database
};


const CONNECTION_URL =
  "mongodb://tengen14:72Qjtb14@recipes-shard-00-00-u0s0m.mongodb.net:27017,recipes-shard-00-01-u0s0m.mongodb.net:27017,recipes-shard-00-02-u0s0m.mongodb.net:27017/test?ssl=true&replicaSet=Recipes-shard-0&authSource=admin&retryWrites=true&w=majority";
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
      recipeSeedDB();
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
      bookSeedDB();
      console.log("Connected to " + "Book Collection");
    }
  );
});
