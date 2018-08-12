var db = require("../models");

module.exports = function(app) {
  app.get("/api/spent/:userid/", function(req, res) {
    db.Spent.findAll({
      where: {
        UserId: req.params.userid
      }
    }).then(function(dbSpent) {
      res.send(dbSpent);
    });
  });

  app.post("/api/spent", function(req, res) {
    db.Spent.create(req.body).then(function(dbSpent) {
      res.json(dbSpent);
    });
  });
  app.delete("api/spent/:id", function(req, res) {
    db.Spent.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSpent) {
      res.json(dbSpent);
    });
  });

  app.put("api/spent", function(req, res) {
    db.Spent.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbSpent) {
      res.json(dbSpent);
    });
  });
};
