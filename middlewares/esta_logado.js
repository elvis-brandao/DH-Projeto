module.exports = (req, res, next) => req.usuario === undefined ? next() : res.redirect('/');