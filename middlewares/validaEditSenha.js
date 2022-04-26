const {check, validationResult, body} = require('express-validator');
const CPF = require('cpf');
const {Usuario} = require('../models');

let validateRegister = [
    check('senha_antiga')
        .notEmpty().withMessage('Favor digitar sua senha antiga'),
    check('senha_usuario')
        .notEmpty().withMessage('Favor definir uma senha').bail()
        .isLength({min: 6}).withMessage('A senha deve ter no mínimo 6 caracteres')
        .isStrongPassword({minUppercase:1, minSymbols: 1, minNumbers: 1}).withMessage('A senha deve conter pelo menos 1 número, 1 letra maiúscula e 1 símbolo.'),
    body('conf_senha_usuario').custom((value, { req }) => {
        if (value !== req.body.senha_usuario) {
            throw new Error('As senhas não as mesmas, confira os dados e tente novamente');
        }
        return true;
        })
];

module.exports = validateRegister;