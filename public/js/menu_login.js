let menu = document.querySelector('.menu');
let submenu = document.querySelector('.submenu');
let itemMenu = document.querySelectorAll('.item-menu');
let clicado = false;

menu.addEventListener('click', () => {
    if (clicado) {
        clicado = false;
    } else {
        clicado = true;
    };

    if (clicado) {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    };
});

itemMenu.forEach(element => {
    element.addEventListener('click', () => {
        submenu.style.display = 'none';
        clicado = false;
    });
});

// submenu.addEventListener('mousemove', e => ocultaMenu(e));

// function ocultaMenu(event){
    
//     const x = event.clientX;
//     const y = event.clientY;

//     const leftOffset = event.target.offsetLeft;
//     const topOffset = event.target.offsetTop;

//     const xInside = x - leftOffset;
//     const yInside = y - topOffset;
    
//     if((yInside > 110 || xInside < 1197 || xInside > 1409) && !clicado){
//         submenu.style.display = 'none';
//         clicado = false;
//     };
// };