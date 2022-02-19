const {check, validationResult, body} = require('express-validator');
let validateRegister = [
    check('nome')
        .notEmpty().withMessage('O campo nome deve ser preenchido').bail()
        .isLength({min: 3}).withMessage('Você deve preencher seu nome completo'),
    check('email')
        .notEmpty().withMessage('O campo email não deve estar em branco').bail()
        .isEmail().withMessage('Por favor usar um email válido'),
    check('tel')
        .notEmpty().withMessage('O campo telefone deve ser preenchido').bail()
        .isMobilePhone('pt-BR').withMessage('Por favor usar um telefone válido'),
    check('senha')
        .notEmpty().withMessage('Favor definir uma senha').bail()
        .isLength({min: 6}).withMessage('A senha deve ter no mínimo 6 caracteres')
];

module.exports = validateRegister;