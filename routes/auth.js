var authController = require("../controllers/authController.js");
var htmlRoutes = require("./htmlRoutes");

module.exports = function(app, passport) {
  app.get("/signup", authController.signup);

  app.get("/signin", authController.signin);

  app.get("/user/planned", isLoggedIn, htmlRoutes.userPlanned);

  app.get("/user/spent", isLoggedIn, htmlRoutes.userSpent);

  app.get("/user/remaining", isLoggedIn, htmlRoutes.userRemaining);

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/user/planned",
      failureRedirect: "/"
    })
  );

  app.get("/logout", authController.logout);

  app.post(
    "/signin",
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
