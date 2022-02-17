const Sequelize = require('sequelize')
const {Jogo, Plataforma, sequelize} = require('../models');
const Op = Sequelize.Op;

const controller = {
    home: async (req, res) => {
        const plataformas = await Plataforma.findAll();
        console.log(plataformas[0].dataValues);

        res.render('index', {plataformas});
    },
    streaming: (req, res) => {
        res.render('streaming');
    },
    produto: (req, res) => {
        res.render('pagProdutos');
    },
    login: (req, res) => {
        res.render('login');
    },
    forum: (req, res) => {
        res.render('pagForum');
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
    }
};

module.exports = controller;