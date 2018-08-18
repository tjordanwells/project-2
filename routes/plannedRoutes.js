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
      planned.push(val.dataValues);
    });

    var category = [];
    result[1].forEach(function(val) {
      category.push(val.dataValues);
    });

    var cats = category.map(function(cat) {
      cat.entries = [];
      cat.total = [];
      planned.forEach(function(entry) {
        if (cat.id === entry.CategoryId) {
          cat.entries.push(entry);
          cat.total.push(parseFloat(entry.amount));
          console.log(cat.total);
          var sumCat = cat.total.reduce(function(total, amount) {
            return total + amount;
          });
          console.log(sumCat);
        }
      });
      console.log(cat);
      return cat;
    });

    res.render("planned", {
      usernav: true,
      section: "planned",
      planData: planned,
      categoryData: cats
    });
  });
};

exports.postUserPlanned = function(req, res) {
  db.Plan.create({
    entry: req.body.entry,
    amount: req.body.amount,
    CategoryId: req.body.category,
    UserId: req.user.id
  }).then(function(dbPlan) {
    res.json(dbPlan);
  });
};

exports.putUserPlanned = function(req, res) {
  db.Spent.update({
    entry: req.body.entry,
    amount: req.body.amount,
    where: {
      id: req.body.id
    }
  }).then(function(dbPlan) {
    res.json(dbPlan);
  });
};

exports.deleteUserPlanned = function(req, res) {
  db.Spent.destroy({
    where: {
      id: req.body.id
    }
  }).then(function(dbPlan) {
    console.log(dbPlan);
    console.log(res);
  });
};
