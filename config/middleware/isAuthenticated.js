module.exports = function (req, res, next) {
  if (req.user) {
    return next();
  }

  // redirects to w.e page you want if they are not logged in
  return res.redirect("/");
};
