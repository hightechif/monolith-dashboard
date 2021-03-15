const passport = require('passport');
const localStrategy = require('passport-local').Strategy
const { User } = require('../models')

// passport.use(new localStrategy(
//   (username, password, done) => {
//     User.findOne({username})
//       .then(user => {
//         if (!user) {
//           return done(null, false);
//         }
//         if (!user.verifyPassword(password)) {
//           return done(null, false);
//         }
//         return done(null, user)
//       })
//   }
// ))

const authenticate = (username, password, done) => {
  try {
    User.findOne({where: {username: username}})
      .then(user => {
        // console.log(user);
        if (!user) {
          return done(null, false);
        }
        if (!user.verifyPassword(password)) {
          return done(null, false);
        }
        return done(null, user)
      })
  } catch (error) {
    return done(null, false, {
      message: error.message
    })
  }
}


passport.use(new localStrategy(authenticate))

passport.serializeUser((user, done) => {
  return done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
  const dataUser = await User.findByPk(id);
  return done(null, dataUser);
})

module.exports = passport;
