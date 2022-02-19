const CPF = require('cpf');

function validaCPF(req, rex, next){
    req.cpfIsValid = CPF.isValid(cpf.value);
    next();
};