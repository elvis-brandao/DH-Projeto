const {check, validationResult, body} = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const {Jogo, Plataforma, Usuario, sequelize} = require('../models');
const Op = Sequelize.Op;

const controller = {
    home: async (req, res) => {
        const plataformas = await Plataforma.findAll();
        res.render('index', {plataformas, usuario: req.usuario});
    },
    streaming: (req, res) => {
        res.render('streaming', {usuario: req.usuario});
    },
    produto: (req, res) => {
        res.render('pagProdutos', {usuario: req.usuario});
    },
    forum: (req, res) => {
        res.render('pagForum', {usuario: req.usuario});
    },
    filtro: async (req, res) => {
        let filtro = req.query.busca;

        const jogos = await Jogo.findAll({where: {nome_jogo: {[Op.like]: `%${filtro}%`}}});
        res.send(jogos);
    },
    filtroCategoria: async (req, res) => {
        let idCategoria = req.params.id;

        const jogos = await Jogo.findAll({include: 'vendedor', where: {plataformas_jogo_id: idCategoria}});
        res.send(jogos);
    },
    perfil: (req, res) => {
        res.render('perfil', {usuario: req.usuario});
    },
    editaPerfil: async (req, res) => {
        let erros = validationResult(req);
        
        if(!erros.isEmpty()){
            if(req.file !== undefined){
                fs.unlink(path.resolve(__dirname + '/../public/img/profile-img/' + req.file.filename), () => console.log(`Arquivo ${req.file.filename} excluído...`));
            };
            res.send('Erro ' + JSON.stringify(erros.errors));
        }else{
            let {nome_usuario, cpf_usuario, telefone_usuario, data_nasc_usuario} = req.body;
            let foto_usuario = req.usuario.foto_usuario;
            let email_usuario = req.usuario.email_usuario;
            // let foto_usuario = req.file === undefined ? 'null' : '/img/profile-img/' + req.file.filename;


            //checa se a foto foi ou não trocada, se sim, apaga a antiga e salva a nova
            if(req.usuario.foto_usuario !== 'null'){
                if(req.file !== undefined){
                    if(req.usuario.foto_usuario !== ('/img/profile-img/' + req.file.filename)){
                        fs.unlink(path.resolve(__dirname + '/../public' + req.usuario.foto_usuario), () => console.log(`Arquivo ${req.usuario.foto_usuario} excluído...`));
                        foto_usuario = '/img/profile-img/' + req.file.filename;
                    };
                };
            };

            //checa se houve alteração de email, caso sim, faz uma segunda verificação, se o novo email já está na base, caso não, salva o novo email
            if(req.usuario.email_usuario !== req.body.email_usuario){
                const usuario = await Usuario.findAll({where: {email_usuario: req.body.email_usuario}});
                if(usuario.length > 0){
                    res.send('O email informado já está cadastrado no sistema');
                }else{
                    email_usuario = req.body.email_usuario;
                };
            };

            await Usuario.update({nome_usuario, cpf_usuario, email_usuario, telefone_usuario, data_nasc_usuario, foto_usuario}, {where: {id: req.usuario.id}});
            
            req.session.usuario.nome_usuario = nome_usuario;
            req.session.usuario.cpf_usuario = cpf_usuario;
            req.session.usuario.email_usuario = email_usuario;
            req.session.usuario.telefone_usuario = telefone_usuario;
            req.session.usuario.data_nasc_usuario = data_nasc_usuario;
            req.session.usuario.foto_usuario = foto_usuario;
        };     
        
        res.redirect('/perfil');
    },
    viewSenha: (req, res) => {
        res.render('alterarsenha', {usuario: req.usuario});
    },
    editaSenha: async (req, res) => {
        let erros = validationResult(req);
        
        if(!erros.isEmpty()){
            res.send('Erro ' + JSON.stringify(erros.errors));
        }else{
            let senha_usuario = req.usuario.senha_usuario;

            if(bcrypt.compareSync(req.body.senha_antiga, senha_usuario)){
                await Usuario.update({senha_usuario: bcrypt.hashSync(req.body.senha_antiga, 10)}, {where: {id: req.usuario.id}});
            }else{
                res.send('Senha Incorreta, favor verificar os dados.')
            };
        };
        res.redirect('/perfil');
    }
};

module.exports = controller;