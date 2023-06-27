const express = require("express");
const router = express.Router();
const User = require("./user");

router.get("/admin/users", (req, res) => {
  res.send("usuarios");
});

router.get("/admin/users/create", (req, res) => {});

router.post("/users/create", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  console.log(email, password);
  res.send("vc acessou o post");
});

module.exports = router;
