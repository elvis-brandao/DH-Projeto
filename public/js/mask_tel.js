
        let tel = document.getElementById('telefone_usuario');

        tel.addEventListener('keypress', () => {
            let telLength = tel.value.length;
            if(telLength === 0){
                tel.value += '(';
            }else if(telLength === 3){
                tel.value += ')';
            }else if(telLength === 9){
                tel.value += '-';
            };
        });