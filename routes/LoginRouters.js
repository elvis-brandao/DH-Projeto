var express = require('express');
var router = express.Router();
var loginController = require('../controllers/LoginControllers');
//Importar o validador
const ValidadorDeForm = require('../middlewares/validaCadUsuario');

/* Routes */
router.get('/', loginController.login);
router.post('/cadUsuario', ValidadorDeForm, loginController.cadUsuario);

module.exports = router;