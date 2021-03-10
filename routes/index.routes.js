const express = require('express');
const router = express.Router();
const dashboardRoute = require('./dashboard.routes');
const indexController = require('../controllers/index.controller');

router.get('/', indexController.home);
router.use('/dashboard', dashboardRoute);

router.use(indexController.notFound);
router.use(indexController.error);

module.exports = router;
