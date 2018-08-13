var db = require("../models");

module.exports = function(app) {
  app.get("/api/category/:id/", function(req, res) {
    db.Category.findAll({
      where: {
        UserId: req.params.id
      }
    }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  app.post("/api/category", function(req, res) {
    db.Category.create(req.body)
      .then(function(dbCategory) {
        res.json(dbCategory);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  app.delete("/api/category/:id", function(req, res) {
    db.Category.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbCategory) {
        res.json(dbCategory);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  app.put("/api/category", function(req, res) {
    db.Category.update(req.body, {
      where: {
        id: req.body.id
      }
    })
      .then(function(dbCategory) {
        res.json(dbCategory);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
};
