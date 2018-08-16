var db = require("../models");
var dummy = require("../dummydata");

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/");
}

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function() {
      res.render("index");
    });
  });

  app.get("/user/planned", isLoggedIn, function(req, res) {
    console.log(req.user);

    var planQuery = db.Plan.findAll({
      where: {
        userid: req.user.id
      }
    });
    var catQuery = db.Category.findAll({
      where: {
        userid: req.user.id
      }
    });

    Promise.all([planQuery, catQuery]).then(function(result) {
      result[0]; // plans
      result[1]; // categories.

      var planned = [];
      result[0].forEach(function(val) {
        console.log(val.dataValues);
        planned.push(val.dataValues);
      });

      var category = [];
      result[1].forEach(function(val) {
        console.log(val.dataValues);
        category.push(val.dataValues);
      });
      res.render("user", {
        usernav: true,
        section: {
          planned: true,
          spent: false,
          remaining: false
        },
        planData: planned,
        categoryData: category
      });
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
