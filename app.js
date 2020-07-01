// Dependencies
var express = require("express");
var mysql = require("mysql");

// app initialization
var app = express();
// mysql connection

var db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "creatureFeature",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("connected as id ");
});

// set view engine
app.set("view engine", "ejs");

// middleware
app.use(express.static("public"));

var PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  // query for all creatures
  res.render("explore.ejs", {});
});

app.get("/welcome", function (req, res) {
  res.render("welcome.ejs", {});
});

app.get("/profile", function (req, res) {
  // query for a single user
  res.render("profile.ejs", {});
});

app.get("/gallery", function (req, res) {
  // query all creatures where id is equal to the current user ID
  res.render("gallery.ejs", {});
});

app.get("/login", function (req, res) {
  res.render("login.ejs", {});
});

app.get("/signup", function (req, res) {
  res.render("sign-up.ejs", {});
});

app.get("/speciesProfile", function (req, res) {
  // query for a creature
  res.render("species-profile.ejs", {});
});

app.get("/submit-creature", function (req, res) {
  // query all worlds
  res.render("submit.ejs", {});
});

// create a post route for handling submit creature form
app.post("/submit-creature", function (req, res) {
  var creature = req.body;
  var id = parseInt(req.params.id);
  todo.id = id;
  console.log(creature);

  for (let i = 0; i < creature.length; i++) {
    if (id === todosItems[i].id) {
      creature[i] = todo;
      res.redirect("/");
    }
  }
});

app.get("/submit-world", function (req, res) {
  // query all worlds
  res.render("submit-world.ejs", {});
});

// create a post route for handling submit world form

app.get("/world", function (req, res) {
  res.render("world.ejs", {});
});

app.listen(PORT, function () {
  console.log("Server is lurking on PORT: " + PORT);
});
