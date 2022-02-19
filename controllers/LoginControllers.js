const {check, validationResult, body} = require('express-validator');

const controller = {
    login: (req, res) => {
        res.render('login');
    },
    cadUsuario: (req, res) => {
        let erros = validationResult(req);
        
        if(erros.isEmpty()){
            res.send(req.body);
        }else{
            res.send('Erro ' + JSON.stringify(erros.errors));
        }
    }
};

module.exports = controller;