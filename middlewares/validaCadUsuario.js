const {check, validationResult, body} = require('express-validator');
const CPF = require('cpf');

const {Usuario} = require('../models');

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
    check('dataNasc')
        .notEmpty().withMessage('Por favor, preencha sua data de nascimento'),
    check('senha')
        .notEmpty().withMessage('Favor definir uma senha').bail()
        .isLength({min: 6}).withMessage('A senha deve ter no mínimo 6 caracteres'),
    body('cpf')
        .custom(cpf => {
            return CPF.isValid(cpf);
        }).withMessage('O CPF informado é inválido').bail()
        .custom(async cpf => {
            const usuario = await Usuario.findAll({where: {cpf_usuario: cpf}});
            if(usuario.length > 0){
                throw new Error('O CPF informado já está cadastrado no sistema');
            };
        })
];

module.exports = validateRegister;