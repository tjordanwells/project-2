var db = require("../models");

module.exports = function(app) {
  app.get("/api/plan/:userid/", function(req, res) {
    db.Plan.findAll({
      where: {
        UserId: req.params.userid
      }
    }).then(function(dbPlan) {
      res.json(dbPlan);
    });
  });

  app.post("/api/plan", function(req, res) {
    db.Plan.create(req.body).then(function(dbPlan) {
      res.json(dbPlan);
    });
  });
  app.delete("/api/plan/:id", function(req, res) {
    db.Plan.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPlan) {
      res.json(dbPlan);
    });
  });

  app.put("/api/plan", function(req, res) {
    db.Plan.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbPlan) {
      res.json(dbPlan);
    });
  });
};
