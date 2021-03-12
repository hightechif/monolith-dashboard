const passport = require('../lib/passport');

const showLoginPage = (req, res) => {
    return res.render('pages/authentication/login', {
      layout: 'layouts/authentication'
    });
}

const login = (req, res, next) => {
  return passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/login'
  })(req, res, next)
}

const showRegisterPage = (req, res) => {
  return res.render('pages/authentication/register', {
    layout: 'layouts/authentication'
  });
}

module.exports = {
  showLoginPage,
  login,
  showRegisterPage
}
