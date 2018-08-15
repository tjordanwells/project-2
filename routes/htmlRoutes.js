var db = require("../models");
var dummy = require("../dummydata");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function() {
      res.render("index");
    });
  });

  app.get("/user/planned", function(req, res) {
    res.render("user", {
      usernav: true,
      section: {
        planned: true,
        spent: false,
        remaining: false
      },
      userData: dummy.budget.planned
    });
  });

  app.get("/user/spent", function(req, res) {
    res.render("user", {
      usernav: true,
      section: {
        planned: false,
        spent: true,
        remaining: false
      },
      userData: dummy.budget.spent
    });
  });

  app.get("/user/remaining", function(req, res) {
    res.render("user", {
      usernav: true,
      section: {
        planned: false,
        spent: false,
        remaining: true
      },
      userData: dummy.budget.remaining
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  //app.get("*", function(req, res) {
  //  res.render("404");
  //});
};
