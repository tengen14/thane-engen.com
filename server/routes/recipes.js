const express = require("express");
const router = express.Router();
const recipesController = require("../controllers/recipesController");

router.get("/", function(req, res, next) {
  recipesController.find(req.query, function(err, results) {
    if (err) {
      console.log(err);
      res.json({
        success: 0,
        error: err
      });
      return;
    }
    res.json({
      success: 1,
      data: results
    });
  });
});

router.get("/:id", function(req, res, next) {
  const id = req.params.id;

  recipesController.findById(id, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: 0,
        data: result
      });
      return;
    }

    res.status(200).json({
      success: 1,
      data: result
    });
  });
});

module.exports = router;
