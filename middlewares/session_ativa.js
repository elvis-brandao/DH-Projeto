module.exports = (req, res, next) => {
    if(req.session.usuario === undefined){
        next();
    }else{
        req.usuario = req.session.usuario;
        next();
    };
};