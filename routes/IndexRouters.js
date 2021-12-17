var express = require('express');
var router = express.Router();
var indexController = require('../controllers/IndexControllers');

/* Routes */
router.get('/', indexController.home);
router.get('/streaming', indexController.streaming);
router.get('/produto', indexController.produto);
router.get('/login', indexController.login);
router.get('/forum', indexController.forum);

module.exports = router;
