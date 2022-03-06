var express = require('express');
var router = express.Router();
var homeController = require('../controllers/HomeControllers');
var esta_logado = require('../middlewares/esta_logado');
var nao_esta_logado = require('../middlewares/nao_esta_logado');

/* Routes */
router.get('/', homeController.home);
router.get('/streaming', homeController.streaming);
router.get('/produto', homeController.produto);
router.get('/forum', homeController.forum);
router.get('/filtro', homeController.filtro);
router.get('/filtro/c/:id', homeController.filtroCategoria);
router.get('/perfil', nao_esta_logado, homeController.perfil);

module.exports = router;