var authController = require("../controllers/authController.js");

module.exports = function(app, passport) {
  app.get("/", authController.login);

  app.get("/", authController.login);

  app.post(
    "/",
    passport.authenticate("local-signup", {
      successRedirect: "/user/planned",
      failureRedirect: "/"
    })
  );
  app.get("/user/planned", isLoggedIn, authController.user);

  app.get("/logout", authController.logout);

  app.post(
    "/",
    passport.authenticate("local-signin", {
      successRedirect: "/user/planned",
      failureRedirect: "/"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect("/");
  }
};
