const {Usuario, sequelize} = require('../models');

// Usuario.findAll().then(
//     data => {
//         console.log(data.map(usuario => usuario.toJSON()));
//         sequelize.close();
//     }
// );

Usuario.create({
    nome_usuario:'lskbcaelvis',
    cpf_usuario:'024.442.393-85',
    email_usuario:'lskbca_elvis19@hotmail.com',
    senha_usuario: '123456',
    telefone_usuario:'+5588998054996',
    data_nasc_usuario: '1987-08-13',
    foto_usuario: 'C:\Users\lskbc\Documents\DH-Projeto\public\img\profile-imgfoto-perfil-1645534009233-ScreenShot-2022-2-21_9-38-16.png'})
    .then(
    data => {
        console.log('Usuario criado');
        sequelize.close();
    }
);