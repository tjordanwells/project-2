var exports = module.exports = {}
// exports.login = function(req, res) {
//   res.render("/");
// };

exports.login = function(req, res) {
  res.render("/");
};

exports.user = function(req, res) {
  res.render("/user/planned");
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};
