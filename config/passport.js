const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const models = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      models.User.findOne({
        where: {
          email: email,
        },
      }).then(function (dbUser) {
        if (!dbUser) {
          return done(null, false, { message: "Incorrect Email Address" });
        } else if (!dbUser.validPassword(password)) {
          return done(null, false, { message: "Incorrect Password" });
        }
        return done(null, dbUser);
      });
    }
  )
);

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

module.exports = passport;