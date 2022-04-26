var express = require('express');
var router = express.Router();
var homeController = require('../controllers/HomeControllers');
var nao_esta_logado = require('../middlewares/nao_esta_logado');

const multer = require('../middlewares/multer');
const validaEditUsuario = require('../middlewares/validaEditUsuario');
const validaEditSenha = require('../middlewares/validaEditSenha');

router.get('/', homeController.home);
router.get('/streaming', homeController.streaming);
router.get('/produto', homeController.produto);
router.get('/forum', homeController.forum);
router.get('/filtro', homeController.filtro);
router.get('/filtro/c/:id', homeController.filtroCategoria);
router.get('/perfil', nao_esta_logado, homeController.perfil);
router.put('/perfil', multer.single('foto-usuario'), validaEditUsuario, homeController.editaPerfil);
router.get('/perfil/alterarsenha', nao_esta_logado, homeController.viewSenha);
router.put('/perfil/alterarsenha', multer.none(), nao_esta_logado, validaEditSenha, homeController.editaSenha);

module.exports = router;