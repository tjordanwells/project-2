var db = require("../models");
var exports = (module.exports = {});

// Load the user/planned page with categories and data
exports.getUserPlanned = function(req, res) {
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

// app.post("/api/plan", function(req, res) {
//   db.Plan.create(req.body).then(function(dbPlan) {
//     res.json(dbPlan);
//   });
// });
// app.delete("/api/plan/:id", function(req, res) {
//   db.Plan.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(dbPlan) {
//     res.json(dbPlan);
//   });
// });

// app.put("/api/plan", function(req, res) {
//   db.Plan.update(
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
//   ).then(function(dbPlan) {
//     res.json(dbPlan);
//   });
// });
