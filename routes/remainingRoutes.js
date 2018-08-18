var db = require("../models");
// var dummy = require("../dummydata");
var exports = (module.exports = {});

// Load the user remaining page
exports.getUserRemaining = function(req, res) {
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

    var cats = category.map(function(cat) {
      cat.entries = [];
      cat.total = [];
      cat.remaining = [];
      spent.forEach(function(entry) {
        if (cat.id === entry.CategoryId) {
          cat.entries.push(entry);
          cat.total.push(parseFloat(entry.amount));
        }
      });
      planned.forEach(function(entry) {
        if (cat.id === entry.CategoryId) {
          cat.total.push(parseFloat(entry.amount));
          cat.remaining = cat.total.reduce(function(total, amount) {
            var addition = total * 100 + amount * 100;
            var divide = addition / 100;
            return divide;
          });
          console.log(cat.remaining);
        }
      });
      console.log(cat);
      return cat;
    });

    res.render("remaining", {
      usernav: true,
      section: "remaining",
      planData: planned,
      spentData: spent,
      categoryData: cats
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
