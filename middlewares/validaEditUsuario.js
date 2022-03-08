const {check, validationResult, body} = require('express-validator');
const CPF = require('cpf');
const {Usuario} = require('../models');

let validateEdit = [
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
    body('cpf_usuario')
        .custom(cpf => {
            return CPF.isValid(cpf);
        }).withMessage('O CPF informado é inválido').bail()
    //     .custom(async cpf => {
    //         const usuario = await Usuario.findAll({where: {cpf_usuario: cpf}});
    //         if(usuario.length > 0){
    //             throw new Error('O CPF informado já está cadastrado no sistema');
    //         };
    //     }),
    // body('email_usuario')
    //     .custom(async email => {
    //         const usuario = await Usuario.findAll({where: {email_usuario: email}});
    //         if(usuario.length > 0){
    //             throw new Error('O email informado já está cadastrado no sistema');
    //         };
    //     })
];

module.exports = validateEdit;