const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');

// const layoutName = (req, res, next) => {
//   res.locals.layout = `layouts/${contentTitle}`
//   next()
// }

// router.use(layoutName('dashboard'));
router.get('/', dashboardController.home);
router.get('/post', dashboardController.post)

module.exports = router;