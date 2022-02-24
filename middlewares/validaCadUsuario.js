const {check, validationResult, body} = require('express-validator');
const CPF = require('cpf');
const {Usuario} = require('../models');

let validateRegister = [
    check('nome_usuario')
        .notEmpty().withMessage('O campo nome deve ser preenchido').bail()
        .isLength({min: 3}).withMessage('Você deve preencher seu nome completo'),
    check('email_usuario')
        .notEmpty().withMessage('O campo email não deve estar em branco').bail()
        .isEmail().withMessage('Por favor usar um email válido'),
    check('telefone_usuario')
        .notEmpty().withMessage('O campo telefone deve ser preenchido').bail()
        .isMobilePhone('pt-BR').withMessage('Por favor usar um telefone celular válido'),
    check('data_nasc_usuario')
        .notEmpty().withMessage('Por favor, preencha sua data de nascimento'),
    check('senha_usuario')
        .notEmpty().withMessage('Favor definir uma senha').bail()
        .isLength({min: 6}).withMessage('A senha deve ter no mínimo 6 caracteres')
        .isStrongPassword({minUppercase:1, minSymbols: 1, minNumbers: 1}).withMessage('A senha deve conter pelo menos 1 número, 1 letra maiúscula e 1 símbolo.'),
    body('cpf_usuario')
        .custom(cpf => {
            return CPF.isValid(cpf);
        }).withMessage('O CPF informado é inválido').bail()
        .custom(async cpf => {
            const usuario = await Usuario.findAll({where: {cpf_usuario: cpf}});
            if(usuario.length > 0){
                throw new Error('O CPF informado já está cadastrado no sistema');
            };
        }),
    body('email_usuario')
        .custom(async email => {
            const usuario = await Usuario.findAll({where: {email_usuario: email}});
            if(usuario.length > 0){
                throw new Error('O email informado já está cadastrado no sistema');
            };
        }),
    body('conf_senha_usuario').custom((value, { req }) => {
        if (value !== req.body.senha_usuario) {
            throw new Error('As senhas não as mesmas, confira os dados e tente novamente');
        }
        return true;
        })
];

module.exports = validateRegister;