const Sequelize = require("sequelize");
const connection = require("../dataBase");
const User = require("../User/user");

const Finance = connection.define("finances", {
  saldo: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  typeFinance: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  reason: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Finance.sync({ force: false });

module.exports = Finance;
