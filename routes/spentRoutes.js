var db = require("../models");
var exports = (module.exports = {});

// Load the user/spent page with categories and data
exports.getUserSpent = function(req, res) {
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

exports.postUserSpent = function(req, res) {
  db.Spent.create({
    entry: req.body.entry,
    amount: req.body.amount,
    category: req.body.category,
    UserId: req.user.id
  }).then(function(data) {
    console.log(data);
  });
};

// app.post("/api/spent", function(req, res) {
//   db.Spent.create(req.body).then(function(dbSpent) {
//     res.json(dbSpent);
//   });
// });
// app.delete("/api/spent/:id", function(req, res) {
//   db.Spent.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(dbSpent) {
//     res.json(dbSpent);
//   });
// });

// app.put("/api/spent", function(req, res) {
//   db.Spent.update(
//     {
//       entry: req.body.entry,
//       amount: req.body.amount,
//       effectiveDate: req.body.effectiveDate,
//       CategoryId: req.body.CategoryId,
//       UserId: req.body.UserId,
//       subCategoryId: req.body.subCategoryId
//     },
//     {
//       where: {
//         id: req.body.id
//       }
//     }
//   ).then(function(dbSpent) {
//     res.json(dbSpent);
//   });
// });
