/*
autor: Pau Llorens Martinez                    

ejercicio: ud6ej3.js
*/

document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    document.getElementById('registrarse').addEventListener('click', volverAComprobarAlEnviar);
    var elementosInput = document.getElementsByTagName('input');
    for(var i = 0 ; i<elementosInput.length ; i++){
        elementosInput[i].addEventListener('blur', comprobarDatosInput);
    }
    var elementosTextArea = document.getElementsByTagName('textarea');
    elementosTextArea[0].addEventListener('blur' , comprobarDatosTextArea);

    var elementosSelect = document.getElementsByTagName('select');
    elementosSelect[0].addEventListener('blur', comprobarElementoSelecionado);


    function comprobarDatosInput(){
        if(this.type == 'text'){
            if(document.getElementById('error'+this.id) != null){
                document.getElementById('error'+this.id).remove();
            }
            if(campoVacioTexto(this.value) == false){
                var divError = document.createElement('div');
                divError.setAttribute('id', 'error'+this.id);
                divError.setAttribute('class', 'error');
                divError.style.backgroundColor = '#F5A9A9';
                divError.style.border = '2px solid red';
                divError.innerHTML = 'El campo ' + this.name + ' no puede estar vacio';
                this.insertAdjacentElement('afterend', divError);
            }else if(expresioneRegular(this.value, this.id) == false){
                var divError = document.createElement('div');
                divError.setAttribute('id', 'error'+this.id);
                divError.setAttribute('class', 'error');
                divError.style.backgroundColor = '#F5A9A9';
                divError.style.border = '2px solid red';
                if(this.id == 'email2'){
                    if(document.getElementById('email1').value != this.value){
                        divError.innerHTML = 'El email es diferente al de arriba;'
                    }
                }else if (this.id == 'contrasenya2'){
                    if(document.getElementById('contrasenya1').value != this.value){
                        divError.innerHTML = 'El contraseña es diferente al de arriba'
                    }
                }else{
                    divError.innerHTML = 'El campo ' + this.name + ' no cumple con el formato';
                }
                this.insertAdjacentElement('afterend', divError);   
            }   
        }else if(this.type == 'radio'){
            var checks = document.getElementsByName("sexo");
            if(comprobarChecks(checks) == false){
                if(document.getElementById('error'+this.name) == null){
                    var divError = document.createElement('div');
                    divError.setAttribute('id', 'error'+this.name);
                    divError.setAttribute('class', 'error');
                    divError.style.backgroundColor = '#F5A9A9';
                    divError.style.border = '2px solid red';
                    divError.innerHTML = 'El campo ' + this.name + ' no puede estar vacio';
                    document.getElementById('hombre').insertAdjacentElement('afterend', divError);
                }
            }else{
                if((comprobarChecks(checks) == true) && (document.getElementById('error'+this.name) != null)){
                    document.getElementById('error'+this.name).remove();
                }
            }
        }else if(this.type == 'date'){
            if(campoVacioTexto(this.value) == false){
                var divError = document.createElement('div');
                divError.setAttribute('id', 'error'+this.id);
                divError.setAttribute('class', 'error');
                divError.style.backgroundColor = '#F5A9A9';
                divError.style.border = '2px solid red';
                divError.innerHTML = 'El campo ' + this.name + ' no puede estar vacio';
                this.insertAdjacentElement('afterend', divError);
            }else{
                if (document.getElementById('error'+this.id) != null){
                    document.getElementById('error'+this.name).remove();
                }
            }

        }else if(this.type == 'checkbox'){
            if(this.name == 'habilidades'){
                var elementos = document.getElementsByName('habilidades');
                if(comprobarChecks(elementos) == false){
                    if(document.getElementById('error'+this.name) == null){
                        var divError = document.createElement('div');
                        divError.setAttribute('id', 'error'+this.name);
                        divError.setAttribute('class', 'error');
                        divError.style.backgroundColor = '#F5A9A9';
                        divError.style.border = '2px solid red';
                        divError.innerHTML = 'El campo ' + this.name + ' no puede estar vacio';
                        document.getElementById('HTML').insertAdjacentElement('beforebegin', divError);
                    }
                }else{
                    if((comprobarChecks(elementos) == true) && (document.getElementById('error'+this.name) != null)){
                        document.getElementById('error'+this.name).remove();
                    }
                }
            }else{
                var elementos = document.getElementsByName('idioma');
                if(comprobarChecks(elementos) == false){
                    if(document.getElementById('error'+this.name) == null){
                        var divError = document.createElement('div');
                        divError.setAttribute('id', 'error'+this.name);
                        divError.setAttribute('class', 'error');
                        divError.style.backgroundColor = '#F5A9A9';
                        divError.style.border = '2px solid red';
                        divError.innerHTML = 'El campo ' + this.name + ' no puede estar vacio';
                        document.getElementById('espanyol').insertAdjacentElement('beforebegin', divError);
                    }
                }else{
                    if((comprobarChecks(elementos) == true) && (document.getElementById('error'+this.name) != null)){
                        document.getElementById('error'+this.name).remove();
                    }
                }
            }

        }
    }


    function comprobarDatosTextArea(){
        if(campoVacioTexto(this.value) == false){
            if(document.getElementById('error'+this.id) == null){
                var divError = document.createElement('div');
                divError.setAttribute('id', 'error'+this.id);
                divError.setAttribute('class', 'error');
                divError.style.backgroundColor = '#F5A9A9';
                divError.style.border = '2px solid red';
                divError.innerHTML = 'El campo ' + this.name + ' no puede estar vacio';
                this.insertAdjacentElement('afterend', divError);
            }
        }else{
            if((this.value.length > 0) && (document.getElementById('error'+this.id) != null)){
                document.getElementById('error'+this.id).remove();
            }
        }
    }

    function comprobarElementoSelecionado(){
        var elementos = document.getElementById('nacionalidad');
        var elementoSelecionado = elementos.selectedIndex
        if(comprobarSelect(elementos.options[elementoSelecionado].value) == false){
            if(document.getElementById('error'+this.id) == null){
                var divError = document.createElement('div');
                divError.setAttribute('id', 'error'+this.id);
                divError.setAttribute('class', 'error');
                divError.style.backgroundColor = '#F5A9A9';
                divError.style.border = '2px solid red';
                divError.innerHTML = 'Debes selecionar una nacionalidad';
                this.insertAdjacentElement('afterend', divError);
            } 
        }else{
            if((comprobarSelect(elementos.options[elementoSelecionado].value) == true) && (document.getElementById('error'+this.id) != null)){
                document.getElementById('error'+this.id).remove();
            }
        }

    }


    function volverAComprobarAlEnviar(evento){
        evento.preventDefault();

        var inputs = document.getElementsByTagName('input');
        for (var i = 0 ; i<inputs.length ; i++){
            inputs[i].focus();
            inputs[i].blur();
        }
        var textArea = document.getElementById('comentario');
        textArea.focus();
        textArea.blur();
        var select = document.getElementById('nacionalidad');
        select.focus();
        select.blur();

        var divError = document.getElementsByClassName('error');
        if(divError.length == 0){
            document.getElementById('formulario').submit();
        }

    }


}

function campoVacioTexto(texto){

    if(texto != ""){
        return true;
    }else{
        return false;
    }
}

function expresioneRegular(texto , campoId){
    console.log('Prueba')
    var expresionUsuario = new RegExp('^[a-z]{1}[a-z0-9]+$', 'i');
    var expresionNombre = new RegExp('^[A-Z]{1}[a-z \s]{1,13}[a-z]{1}$');
    var expresionEmail = new RegExp('^[a-z0-9_.]+@[a-z]+.[a-z]{2,3}$');
    var expresionContrasenya = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z0-9$@$!%*?&]{8,15}');
    var correcto = false;
    var correo = "";
    if(campoId == 'usuario'){
        if(expresionUsuario.test(texto) == true){
            correcto = true;
        }
    }else if ((campoId == 'nombre') || (campoId == 'apellido1') || (campoId == 'apellido2')){
        if(expresionNombre.test(texto) == true){
            correcto = true;
        }
    }else if (campoId == 'email1'){
        if(expresionEmail.test(texto) == true){
            correcto = true;
        }
    }else{
        console.log(texto);
        if(expresionContrasenya.test(texto) == true){
            correcto = true;
        }
    }
    return correcto;
}



function comprobarChecks(checks){
    var estaSel = false;
    for (var i = 0 ; i<checks.length ; i++){
        if(checks[i].checked == true){
            estaSel = true;
            break;
        }
    }
    return estaSel;

}

function comprobarSelect(elemento){
    if (elemento != -1){
        return true;
    }else{
        return false;
    }
}