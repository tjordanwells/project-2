//load bcrypt
var bCrypt = require("bcrypt-nodejs");

var db = require("../../models");

module.exports = function(passport, user) {
  var User = user;
  var LocalStrategy = require("passport-local").Strategy;

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",

        passwordField: "password",

        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, email, password, done) {
        var generateHash = function(password) {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        User.findOne({
          where: {
            email: email
          }
        }).then(function(user) {
          if (user) {
            return done(null, false, {
              message: "That email is already taken"
            });
          } else {
            var userPassword = generateHash(password);

            var data = {
              email: email,
              password: userPassword,
              name: req.body.name
            };

            User.create(data).then(function(newUser) {
              if (!newUser) {
                return done(null, false);
              }

              if (newUser) {
                var incomeCat = {
                  category: "Income",
                  UserId: newUser.dataValues.id
                };
                var housingCat = {
                  category: "Housing",
                  UserId: newUser.dataValues.id
                };
                var transCat = {
                  category: "Transportation",
                  UserId: newUser.dataValues.id
                };
                var foodCat = {
                  category: "Food",
                  UserId: newUser.dataValues.id
                };
                var debtCat = {
                  category: "Debt",
                  UserId: newUser.dataValues.id
                };
                var savingsCat = {
                  category: "Savings",
                  UserId: newUser.dataValues.id
                };
                var miscCat = {
                  category: "Misc",
                  UserId: newUser.dataValues.id
                };

                db.Category.bulkCreate([
                  incomeCat,
                  housingCat,
                  transCat,
                  foodCat,
                  debtCat,
                  savingsCat,
                  miscCat
                ]);

                return done(null, newUser);
              }
            });
          }
        });
      }
    )
  );

  passport.use(
    "local-signin",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, done) {
        var User = user;
        console.log("attempting login", user);
        var isValidPassword = function(userpass, password) {
          return bCrypt.compareSync(password, userpass);
        };

        User.findOne({
          where: {
            email: email
          }
        })
          .then(function(user) {
            if (!user) {
              return done(null, false, {
                message: "Email does not exist"
              });
            }
            if (!isValidPassword(user.password, password)) {
              return done(null, false, {
                message: "Incorrect password"
              });
            }

            var userInfo = user.get();

            return done(null, userInfo);
          })
          .catch(function(err) {
            console.log("Error: ", err);
            return done(null, false, {
              message: "Something went wrong with your Signin"
            });
          });
      }
    )
  );
};
