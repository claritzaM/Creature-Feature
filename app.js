// Dependencies
var express = require("express");

// app initialization
var app = express();

// set view engine
app.set("view engine", "ejs");

var PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.render("profile.ejs", {});
});

app.get("/gallery", function (req, res) {
  res.render("gallery.ejs", {});
});

app.get("/login", function (req, res) {
  res.render("profile.ejs", {});
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
