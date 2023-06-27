const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./dataBase");
const userController = require("./User/UserController");
const User = require("./User/user");
//DataBase
connection
  .authenticate()
  .then(() => {
    console.log("conectado com banco");
  })
  .catch((e) => {
    console.log(`deu erro por causa do: ${e}`);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//controllers
app.use("/", userController);

app.listen(8081, () => {
  console.log("servidor rodando");
});
