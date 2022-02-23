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
            fs.unlink(path.resolve(__dirname + '/../public/img/profile-img/' + req.file.filename), () => console.log(`Arquivo ${req.file.filename} excluído...`));
            res.send('Erro ' + JSON.stringify(erros.errors));
        }else{
            let {nome_usuario, cpf_usuario, email_usuario, senha_usuario, telefone_usuario, data_nasc_usuario} = req.body;
            let foto_usuario = path.resolve(__dirname + '/../public/img/profile-img' + req.file.filename);
            let senhaEnc = bcrypt.hashSync(senha_usuario, 10);

            // console.log(nome_usuario, cpf_usuario, email_usuario, senha_usuario, telefone_usuario, data_nasc_usuario, foto_usuario);
            let usuario = await Usuario.create({nome_usuario, cpf_usuario, email_usuario, senha_usuario: senhaEnc, telefone_usuario, data_nasc_usuario, foto_usuario});
            
            res.send('Usuario Criado com sucesso!');
        }
    }
};

module.exports = controller;