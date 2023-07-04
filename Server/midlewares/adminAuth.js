const adminAuth = (req, res, next) => {
  if (req.session.user != undefined) {
    next();
  } else {
    res.redirect("/admin/users/create");
  }
};

module.exports = adminAuth;
