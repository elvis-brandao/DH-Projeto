const {check, validationResult, body} = require('express-validator');

const controller = {
    login: (req, res) => {
        res.render('login');
    },
    cadUsuario: async (req, res) => {
        let erros = validationResult(req);

        if(!erros.isEmpty()){
            res.send('Erro ' + JSON.stringify(erros.errors));
        }else{
            res.send(req.body);
        }
    }
};

module.exports = controller;