const express = require("express");
const router = express.Router();
const User = require("./user");
const Finance = require("../Finance/financeModel");
const bcrypt = require("bcryptjs");
const adminAuth = require("../midlewares/adminAuth");

var UserSession = [];

router.get("/admin/users", (req, res) => {
  User.findAll({ model: Finance }).then((users) => {
    res.json({
      users: users,
    });
  });
});

router.get("/admin/users/name", (req, res) => {
  var id = req.User.findAll().then((users) => {
    res.json({
      users: users,
    });
  });
});

router.get("/admin/users/create", adminAuth, (req, res) => {
  res.send("midleware");
});

router.post("/users/create", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  var name = req.body.name;

  User.findOne({ where: { email: email } }).then((user) => {
    if (user == undefined) {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(password, salt);

      Finance.create({
        saldo: 80,
        typeFinance: "Crédito",
        date: Date(),
        reason: "Vitalício",
      }).then((response) => {
        const financeId = response.id;

        User.create({
          name,
          name,
          email: email,
          password: hash,
          financeId,
        })
          .then(() => {
            console.log("Usuário cadastrado com sucesso!");
          })
          .catch((e) => {
            console.log(`aconteceu um erro: ${e}`);
          });
      });

      res.send("rota create deu certo");
    } else {
      res.status(500).send("usuário ja cadastrado!");
    }
  });
});

router.get("/login", (req, res) => {
  res.send(UserSession);
});

router.post("/authenticate", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({ where: { email: email } }).then((user) => {
    if (user != undefined) {
      //se existir o usuario com email
      //validar senha
      var correct = bcrypt.compareSync(password, user.password);
      if (correct) {
        UserSession = req.session.user = {
          id: user.id,
          email: user.email,
          name: user.name,
        };
        res.json(req.session.user);
      } else {
        ///  res.status(400);
        res.sendStatus(400);
      }
    } else {
    }
  });
});

module.exports = router;
