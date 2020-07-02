// Dependencies
var express = require("express");
var mysql = require("mysql");

// passport pkgs
var passport = require("./config/passport").passport;
var session = require("express-session");
var userEncrypt = require("./config/middleware/userEncrypt");
var isAuthenticated = require("./config/middleware/isAuthenticated");

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

var passwordDB = require("./config/passport").passwordDB;

db.connect(function (err) {
  if (err) throw err;
  console.log("connected as id ");
});

// set view engine
app.set("view engine", "ejs");

// middleware
app.use(express.static("public")); // adding static assets (css, img, js files)
app.use(express.urlencoded({ extended: false })); // reads the data
app.use(express.json()); // format the data coming in as an object under a property call body

// passport stuff
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
var PORT = process.env.PORT || 3000;

app.get("/explore", function (req, res) {
  // query for all creatures
  res.render("explore.ejs", {});
});

app.get("/", function (req, res) {
  res.render("welcome.ejs", {});
});

app.get("/profile", function (req, res) {
  // query for a single user
  var sql = "SELECT * FROM creatures";
  db.query(sql, function (err, results) {
    if (err) throw err;
    console.log(results);
    res.render("profile.ejs", { creatures: results });
  });
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
  console.log(creature);
  var todo = req.body;

  var sql = "INSERT INTO creatures SET ?";
  db.query(sql, creature, function (err, result) {
    if (err) throw err;
    res.redirect("/profile");
  });
});

app.post("/userInfo", function (req, res) {
  var user = req.body;
  var sql =
    "INSERT INTO users (lastName, firstName, userName, email, password) VALUES ?";
  var value = [
    [user.lastName, user.firstName, user.userName, user.email, user.password],
  ];
  db.query(sql, [value], function (err, result) {
    if (err) throw err;
    console.log("number of records inserted" + result.affectedRows);
  });
  console.log(user);
  res.redirect("/signup");
});

app.get("/submit-world", function (req, res) {
  // query all worlds
  res.render("submit-world.ejs", {});
});

app.get("/world", function (req, res) {
  res.render("world.ejs", {});
});

app.listen(PORT, function () {
  console.log("Server is lurking on PORT: " + PORT);
});
