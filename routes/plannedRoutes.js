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
    db.Plan.update(
      {
        entry: req.body.entry,
        amount: req.body.amount,
        effectiveDate: req.body.effectiveDate,
        CategoryId: req.body.CategoryId,
        UserId: req.body.UserId,
        subCategoryId: req.body.subCategoryId
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(dbPlan) {
      res.json(dbPlan);
    });
  });
};
