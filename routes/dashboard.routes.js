const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');

const restrict = (req, res, next) => {
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/auth/login');
}

// const layoutName = (req, res, next) => {
//   res.locals.layout = `layouts/${contentTitle}`
//   next()
// }

// router.use(layoutName('dashboard'));
router.get('/', restrict, dashboardController.home);
router.get('/post', restrict, dashboardController.post)

module.exports = router;
