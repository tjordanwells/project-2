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
    res.render("spent", {
      usernav: true,
      section: "spent",
      spentData: spent,
      categoryData: category
    });
  });
};

exports.postUserSpent = function(req, res) {
  db.Spent.create({
    entry: req.body.entry,
    amount: req.body.amount,
    CategoryId: req.body.category,
    UserId: req.user.id
  }).then(function(dbSpent) {
    res.json(dbSpent);
  });
};

exports.putUserSpent = function(req, res) {
  db.Spent.update({
    entry: req.body.entry,
    amount: req.body.amount,
    where: {
      id: req.body.id
    }
  }).then(function(dbSpent) {
    res.json(dbSpent);
  });
};

exports.deleteUserSpent = function(req, res) {
  db.Spent.destroy({
    where: {
      id: req.body.id
    }
  }).then(function(dbSpent) {
    console.log(dbSpent);
  });
};
