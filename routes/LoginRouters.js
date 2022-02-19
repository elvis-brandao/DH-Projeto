var express = require('express');
var router = express.Router();
var loginController = require('../controllers/LoginControllers');
//Importando os validadores
const validadorDeForm = require('../middlewares/validaCadUsuario');
const validadorCPF = require('../middlewares/validaCPF');


/* Routes */
router.get('/', loginController.login);
router.post('/cadUsuario', validadorDeForm, validadorCPF(), loginController.cadUsuario);

module.exports = router;