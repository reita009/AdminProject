const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./dataBase");
const userController = require("./User/UserController");
const User = require("./User/user");
const session = require("express-session");
//DataBase
connection
  .authenticate()
  .then(() => {
    console.log("conectado com banco");
  })
  .catch((e) => {
    console.log(`deu erro por causa do: ${e}`);
  });
//sessions
const minute = 60000;
app.use(
  session({
    secret: "blueBird",
    cookie: { maxAge: minute * 60 },
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//controllers
app.use("/", userController);

app.get("/session", (req, res) => {
  req.session.ano = 2023;
  res.send("sessão gerada!");
});

app.get("/leitura", (req, res) => {
  res.json({
    ano: req.session.ano,
  });
});

app.listen(8081, () => {
  console.log("servidor rodando");
});
