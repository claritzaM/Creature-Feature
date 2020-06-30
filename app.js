// Dependencies
var express = require("express");
var mysql = require("mysql");

// app initialization
var app = express();
// mysql connection

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "password",
  database: "creatureFeature",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

// set view engine
app.set("view engine", "ejs");

// middleware
app.use(express.static("public"));

var PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.render("explore.ejs", {});
});

app.get("/welcome", function (req, res) {
  res.render("welcome.ejs", {});
});

app.get("/profile", function (req, res) {
  res.render("profile.ejs", {});
});

app.get("/gallery", function (req, res) {
  res.render("gallery.ejs", {});
});

app.get("/login", function (req, res) {
  res.render("login.ejs", {});
});

app.get("/signup", function (req, res) {
  res.render("sign-up.ejs", {});
});

app.get("/speciesProfile", function (req, res) {
  res.render("species-profile.ejs", {});
});

app.get("/submit", function (req, res) {
  res.render("submit.ejs", {});
});

app.get("/world", function (req, res) {
  res.render("world.ejs", {});
});

app.listen(PORT, function () {
  console.log("Server is lurking on PORT: " + PORT);
});
