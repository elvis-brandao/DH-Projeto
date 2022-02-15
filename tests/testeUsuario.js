const {Usuario, sequelize} = require('../models');

Usuario.findAll().then(
    data => {
        console.log(data.map(usuario => usuario.toJSON()));
        sequelize.close();
    }
);