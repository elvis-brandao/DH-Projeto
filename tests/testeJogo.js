const {Jogo, sequelize} = require('../models');

Jogo.findAll().then(
    data => {
        console.log(data.map(jogo => jogo.toJSON()));
        sequelize.close();
    }
);