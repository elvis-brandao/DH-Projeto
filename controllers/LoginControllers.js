const Sequelize = require('sequelize');
const {Usuario} = require('../models');
const Op = Sequelize.Op;

const {check, validationResult, body} = require('express-validator');
const CPF = require('cpf');

const controller = {
    login: (req, res) => {
        res.render('login');
    },
    cadUsuario: async (req, res) => {
        let erros = validationResult(req);
        let cpfValido = CPF.isValid(req.body.cpf);
        let cpfOK;
        
        //checagem de cpf antes de guardar as informações no banco de dados
        if(!cpfValido){
            res.send('CPF Inválido!');
        }else{
            let cpf = req.body.cpf;
            const usuario = await Usuario.findAll({where: {cpf_usuario: {[Op.like]: `%${cpf}%`}}});
            
            if (usuario.length === 0){
                cpfOK = true;
                console.log('CPF informado válido e não existente na base.');
            }else{
                cpfOK = false;
                console.log('CPF informado válido mas já cadastrado na base.');
            };
        };
        
        //checagem de todas as condições (exceto cpf) dos campos do form antes de inserir na base de dados
        if(!erros.isEmpty()){
            res.send('Erro ' + JSON.stringify(erros.errors));
        }else{
            res.send(req.body);
        }
    }
};

module.exports = controller;