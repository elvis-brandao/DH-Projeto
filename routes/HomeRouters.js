var express = require('express');
var router = express.Router();
var homeController = require('../controllers/HomeControllers');

/* Routes */
router.get('/', homeController.home);
router.get('/streaming', homeController.streaming);
router.get('/produto', homeController.produto);
router.get('/login', homeController.login);
router.get('/forum', homeController.forum);

module.exports = router;
