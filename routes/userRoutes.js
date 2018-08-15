var db = require("../models");

module.exports = function(app) {
  app.post("/api/users", function(req, res) {
    // console.log(req.body);

    db.User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/users", function(req, res) {
    db.User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
