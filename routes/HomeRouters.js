var express = require('express');
var router = express.Router();
var homeController = require('../controllers/HomeControllers');

/* Routes */
router.get('/', homeController.home);
router.get('/streaming', homeController.streaming);
router.get('/produto', homeController.produto);
router.get('/forum', homeController.forum);
router.get('/filtro', homeController.filtro);
router.get('/filtro/c/:id', homeController.filtroCategoria);

module.exports = router;