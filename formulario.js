let validador = {
    handleSubmit:(event) => {
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');

    //lop em cada um dos campos
        for(let i=0;i<inputs.length;i++) {
            let input = inputs[i];
            let check = validador.checkInput(input);
            if(check !== true) {
                send = false;
                console.log(check); //exibe o erro
            }
        }

        if(send) {
            form.submit();
        }
    },
    checkInput:(input) => {
        let rules = input.getAttribute('data-rules');
        if(rules !== null) {
            rules = rules.split('|');
            for(let r in rules) {
                let rDetails = rules[r].split('=');
                switch(rDetails[0]) {
                    case 'required':
                        if(input.value == '') {
                            return 'este campo é obrigatorio'
                        }
                    break;
                    case 'min':

                    break;
                }
            }
        }
        return true;
    }
};

let form = document.querySelector('.validador');
form.addEventListener('submit', validador.handleSubmit);
