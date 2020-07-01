var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var mysql = require("mysql");
var bcrypt = require("bcrypt");

// DATABASE Connection
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "creatureFeature",
});

db.connect(function (error) {
  if (error) throw error;

  console.log("MYSQL is connected");
});

// Handling registration
passport.use(
  "local-signup",
  new LocalStrategy(
    { usernameField: "email", passReqToCallback: true },
    function (req, email, password, done) {
      var sql = "SELECT * FROM users WHERE ?";
      db.query(sql, [{ email: email }], function (err, user) {
        if (err) {
          console.log("eror is here in sql");

          return done(err);
        }
        // reject user with duplicate emails
        if (user.length != 0) {
          console.log("eror user already in db");
          return done(null, false, { message: "email is already is use" });
        }

        //   adding new user to Db
        var sql = "INSERT INTO users SET ?";
        db.query(
          sql,
          { username: req.body.username, email: email, password: password },
          function (err, newUser) {
            if (err) {
              return done(err);
            }
            // console.log(newUser);

            return done(null, {
              id: newUser.insertId,
              username: req.body.username,
              email: email,
              password: password,
            });
          }
        );
      });
    }
  )
);

// Handling user login
passport.use(
  "local-login",
  new LocalStrategy({ usernameField: "email" }, function (
    email,
    password,
    done
  ) {
    var sql = "SELECT * FROM users WHERE ?";
    db.query(sql, [{ email: email }], function (err, user) {
      if (err) {
        console.log("eror is here in sql");

        return done(err);
      }
      // reject user that are not in DB
      if (user.length === 0) {
        console.log("eror user no in db");
        return done(null, false, {
          message: "Email is incorrect or please register",
        });
      }

      //   check password to password store in DB
      if (!verifyPassword(password, user[0].password)) {
        return done(null, false, { message: "incorrect password" });
      }

      return done(null, user[0]);
    });
  })
);

// compare user password to encrypted password
function verifyPassword(userPassword, dbPassword) {
  return bcrypt.compareSync(userPassword, dbPassword);
}

// keeping our user logged in
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

module.exports = { passport: passport, db: db };
