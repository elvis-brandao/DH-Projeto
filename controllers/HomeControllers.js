const controller = {
    home: (req, res) => {
        res.render('index');
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
    }
};

module.exports = controller;