var express = require("express");
var ejs = require("ejs");
var app = express();
var mysql = require("mysql");

app.set("views", "views");
app.set("view engine", "ejs");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "pruebanode"
});

app.listen(8083);
app.use("/favicon.ico", (pet, res) => {res.status(402)})
app.use("/:ciudad", function(pet, res) {
    var sql = "SELECT * FROM temp WHERE nombreCiudad='" + pet.params.ciudad + "'"
  con.query(sql, function(err, result, fields) {
    if (err) throw err;
    console.log(sql);
    let variables = {
      nombreCiudad: pet.params.ciudad,
      temperaturaCiudad: result[0].temperaturaCiudad,
      temperaturaMaxCiudad: result[0].temperaturaMaxCiudad,
      temperaturaMinCiudad: result[0].temperaturaMinCiudad,
    };
    res.render("index", variables);
  });
});
