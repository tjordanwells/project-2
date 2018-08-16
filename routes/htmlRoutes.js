var db = require("../models");
// var dummy = require("../dummydata");
var exports = (module.exports = {});

// Load the user/planned page with categories and data
exports.userPlanned = function(req, res) {
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
};

// Load the user/spent page with categories and data
exports.userSpent = function(req, res) {
  var spentQuery = db.Spent.findAll({
    where: {
      userid: req.user.id
    }
  });
  var catQuery = db.Category.findAll({
    where: {
      userid: req.user.id
    }
  });

  Promise.all([spentQuery, catQuery]).then(function(result) {
    result[0]; // spent
    result[1]; // categories.

    var spent = [];
    result[0].forEach(function(val) {
      console.log(val.dataValues);
      spent.push(val.dataValues);
    });

    var category = [];
    result[1].forEach(function(val) {
      console.log(val.dataValues);
      category.push(val.dataValues);
    });
    res.render("user", {
      usernav: true,
      section: {
        planned: false,
        spent: true,
        remaining: false
      },
      spentData: spent,
      categoryData: category
    });
  });
};

// Load the user remaining page
exports.userRemaining = function(req, res) {
  var planQuery = db.Plan.findAll({
    where: {
      userid: req.user.id
    }
  });

  var spentQuery = db.Spent.findAll({
    where: {
      userid: req.user.id
    }
  });

  var catQuery = db.Category.findAll({
    where: {
      userid: req.user.id
    }
  });

  Promise.all([planQuery, spentQuery, catQuery]).then(function(result) {
    result[0]; //]planned
    result[1]; // spent
    result[2]; // categories.

    var planned = [];
    result[0].forEach(function(val) {
      console.log(val.dataValues);
      planned.push(val.dataValues);
    });

    var spent = [];
    result[1].forEach(function(val) {
      console.log(val.dataValues);
      spent.push(val.dataValues);
    });

    var category = [];
    result[2].forEach(function(val) {
      console.log(val.dataValues);
      category.push(val.dataValues);
    });
    res.render("user", {
      usernav: true,
      section: {
        planned: false,
        spent: false,
        remaining: true
      },
      planData: planned,
      spentData: spent,
      categoryData: category
    });
  });
};

// // Load example page and pass in an example by id
// app.get("/example/:id", function(req, res) {
//   db.Example.findOne({ where: { id: req.params.id } }).then(function(
//     dbExample
//   ) {
//     res.render("example", {
//       example: dbExample
//     });
//   });
// });

// Render 404 page for any unmatched routes
//app.get("*", function(req, res) {
//  res.render("404");
//});
