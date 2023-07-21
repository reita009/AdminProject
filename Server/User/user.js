const Sequelize = require("sequelize");
const connection = require("../dataBase");
//const Finance = require("../Finance/finance");
const Finance = require("../Finance/financeModel");

const User = connection.define("users", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
User.belongsTo(Finance);
User.sync({ force: false });

module.exports = User;
