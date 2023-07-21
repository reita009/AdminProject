const express = require("express");
const router = express.Router();
const Finance = require("./financeModel");

router.get("/admin/finances", (req, res) => {
  Finance.findAll().then((finance) => {
    res.json({
      finance,
    });
  });
});

module.exports = router;
