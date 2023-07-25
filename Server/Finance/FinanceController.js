const express = require("express");
const router = express.Router();
const Finance = require("./financeModel");
const User = require("../User/user");

router.get("/admin/finances", (req, res) => {
  Finance.findAll().then((finance) => {
    res.json({
      finance,
    });
  });
});

router.get("/admin/finance/balance", (req, res) => {
  User.findOne().then((user) => {
    Finance.findOne({ where: { id: user.financeId } }).then((finance) => {
      res.json(finance.saldo);
    });
  });
});

module.exports = router;
