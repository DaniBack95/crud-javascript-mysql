const express = require("express");
const { engine } = require("express-handlebars");
const myconnection = require("express-myconnection");
const bodyparser = require("body-parser");
const mysql = require("mysql");
const tasksRoutes = require("./routes/tasks");

const app = express();

app.use(express.static("/public"));

app.set("port", 4000);

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use(bodyparser.json());

app.set("views", __dirname + "/views");
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");


app.use(
  myconnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "sql/Server*32",
      port: 3306,
      database: "crudjsnode",
    },
    "single"
  )
);

app.listen(app.get("port"), () => {
  console.log("Listening on port", app.get("port"));
});

app.use("/", tasksRoutes);

app.get("/", (req, res) => {
  res.render("home");
});
