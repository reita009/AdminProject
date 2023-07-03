const express = require("express");
const router = express.Router();
const User = require("./user");
const bcrypt = require("bcryptjs");

router.get("/admin/users", (req, res) => {
  User.findAll().then((users) => {
    res.json({
      users: users,
    });
  });
});

router.get("/admin/users/create", (req, res) => {});

router.post("/users/create", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({ where: { email: email } }).then((user) => {
    if (user == undefined) {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(password, salt);

      User.create({
        email: email,
        password: hash,
      })
        .then(() => {
          console.log("Usuário cadastrado com sucesso!");
        })
        .catch((e) => {
          console.log(`aconteceu um erro: ${e}`);
        });
      res.send("rota create deu certo");
    } else {
      res.status(500).send("usuário ja cadastrado!");
    }
  });
});

module.exports = router;