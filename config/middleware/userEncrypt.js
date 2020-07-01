const bcrypt = require("bcrypt");

module.exports = function (req, res, next) {
  var user = req.body;
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);

  next();
};
