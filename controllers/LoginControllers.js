const {check, validationResult, body} = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const {Usuario} = require('../models');

const controller = {
    login: (req, res) => {
        res.render('login');
    },
    cadUsuario: async (req, res) => {
        let erros = validationResult(req);

        if(!erros.isEmpty()){
            if(req.file !== undefined){
                fs.unlink(path.resolve(__dirname + '/../public/img/profile-img/' + req.file.filename), () => console.log(`Arquivo ${req.file.filename} excluído...`));
            };
            res.send('Erro ' + JSON.stringify(erros.errors));
        }else{
            let {nome_usuario, cpf_usuario, email_usuario, senha_usuario, telefone_usuario, data_nasc_usuario} = req.body;
            let foto_usuario = req.file === undefined ? 'null' : '/img/profile-img/' + req.file.filename;
            let senhaEnc = bcrypt.hashSync(senha_usuario, 10);

            let usuario = await Usuario.create({nome_usuario, cpf_usuario, email_usuario, senha_usuario: senhaEnc, telefone_usuario, data_nasc_usuario, foto_usuario});
            // console.log(usuario);
            
            res.send('Usuario Criado com sucesso!');
        };
    },
    loginUsuario: async (req, res) => {
        const usuario = await Usuario.findAll({where: {email_usuario: req.body.email_usuario}});

        if(usuario.length > 0 && bcrypt.compareSync(req.body.senha_usuario, usuario[0].dataValues.senha_usuario)){
            req.session.usuario = usuario[0].dataValues;
            res.redirect('/');
        } else{
            res.send('email ou senha errados, verifique os dados e tente novamente');
        };
    },
    logout: (req, res) => {
        req.session.usuario = undefined;
        res.redirect('/');
    }
};

module.exports = controller;