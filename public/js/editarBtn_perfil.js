let editarBtn = document.querySelector('.editarBtn');
let salvarBtn = document.querySelector('.salvarBtn');

let img_result = document.getElementById('img-result');
let nome_usuario = document.getElementById('nome_usuario');
let cpf_usuario = document.getElementById('cpf_usuario');
let email_usuario = document.getElementById('email_usuario');
let telefone_usuario = document.getElementById('telefone_usuario');
let data_nasc_usuario = document.getElementById('data_nasc_usuario');

editarBtn.addEventListener('click', () => {
    img_result.style.display = 'block';
    nome_usuario.removeAttribute('disabled');
    cpf_usuario.removeAttribute('disabled');
    email_usuario.removeAttribute('disabled');
    telefone_usuario.removeAttribute('disabled');
    data_nasc_usuario.removeAttribute('disabled');
    salvarBtn.removeAttribute('disabled');
    editarBtn.setAttribute('disabled', '');
});

// salvarBtn.addEventListener('click', () => {
//     // e.preventDefault();
//     img_result.style.display = 'none';
//     nome_usuario.setAttribute('disabled', '');
//     cpf_usuario.setAttribute('disabled', '');
//     email_usuario.setAttribute('disabled', '');
//     telefone_usuario.setAttribute('disabled', '');
//     data_nasc_usuario.setAttribute('disabled', '');
//     salvarBtn.setAttribute('disabled', '');
//     editarBtn.removeAttribute('disabled');
// });