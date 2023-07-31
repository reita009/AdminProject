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

router.get("/teste", (req, res) => {
  Finance.findOne({ where: { id: 1 } }).then((user) => {
    res.json(user.saldo);
  });
});

router.post("/admin/finance/update", (req, res) => {
  const voucher = req.body.voucher;
  const financeId = req.body.financeId;
  const typeFinance = req.body.typeFinance;

  Finance.findOne({ where: { id: 1 } }).then((response) => {
    let saldo = response.saldo + parseInt(voucher);

    Finance.update(
      { saldo: saldo, typeFinance: typeFinance },
      {
        where: {
          id: financeId,
        },
      }
    )
      .then(() => {
        console.log("update do valor e tipo do pagamento feito com sucesso!");
      })
      .catch((e) => {
        console.log("aconteceu algum erro!" + e);
      });
  });

  res.send("update do valor e tipo do pagamento feito com sucesso!");
});

module.exports = router;
