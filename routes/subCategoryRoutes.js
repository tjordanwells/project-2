var db = require("../models");

module.exports = function(app) {
  app.get("/api/subcategory/:id/", function(req, res) {
    db.subCategory
      .findAll({
        where: {
          UserId: req.params.id
        }
      })
      .then(function(dbSubCategory) {
        res.json(dbSubCategory);
      });
  });

  app.post("/api/subcategory", function(req, res) {
    db.subCategory
      .create(req.body)
      .then(function(dbSubCategory) {
        res.json(dbSubCategory);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  app.delete("/api/subcategory/:id", function(req, res) {
    db.subCategory
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbSubCategory) {
        res.json(dbSubCategory);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  app.put("/api/subcategory", function(req, res) {
    db.subCategory
      .update(
        {
          subCategory: req.body.subCategory,
          CategoryId: req.body.CategoryId,
          UserId: req.body.UserId
        },
        {
          where: {
            id: req.body.id
          }
        }
      )
      .then(function(dbSubCategory) {
        res.json(dbSubCategory);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
};
