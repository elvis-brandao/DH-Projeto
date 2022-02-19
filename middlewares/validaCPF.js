const CPF = (strCPF) => {
    return (req, res, next) => {
        var Soma;
        var Resto;
        
        if (strCPF == "00000000000"){
            req.cpfValido = false;
            next();
        };
        
        Soma = 0;
        for (i=1; i<=9; i++){
            Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        };
        
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)){
            Resto = 0;
        };

        if (Resto != parseInt(strCPF.substring(9, 10))){
            req.cpfValido = false;
            next();
        };

        Soma = 0;
        for (i = 1; i <= 10; i++){
            Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        };

        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)){
            Resto = 0;
        };

        if (Resto != parseInt(strCPF.substring(10, 11) )){
            req.cpfValido = false;
            next();
        };
        
        req.cpfValido = true;
        next();
    };
};

module.exports = CPF;