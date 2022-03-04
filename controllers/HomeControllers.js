const Sequelize = require('sequelize')
const {Jogo, Plataforma, sequelize} = require('../models');
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
    }
};

module.exports = controller;