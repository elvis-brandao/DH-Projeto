var express = require('express');
var router = express.Router();
var loginController = require('../controllers/LoginControllers');
var esta_logado = require('../middlewares/esta_logado');
//Importando os validadores
const validadorDeForm = require('../middlewares/validaCadUsuario');

//importando o multer
const multer = require('../middlewares/multer');


/* Routes */
router.get('/', esta_logado, loginController.login);
router.get('/logout', loginController.logout);
router.post('/cadUsuario', multer.single('foto-usuario'), validadorDeForm, loginController.cadUsuario);
router.post('/', multer.none(), loginController.loginUsuario);

module.exports = router;