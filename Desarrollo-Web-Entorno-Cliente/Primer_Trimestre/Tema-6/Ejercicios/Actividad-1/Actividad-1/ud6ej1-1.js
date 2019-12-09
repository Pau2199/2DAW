/*
autor: Pau Llorens Martinez                    

ejercicio: ud6ej1-1.js
*/

document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    var elementosInput = document.getElementsByTagName('input');
    for (var i = 0 ; i<elementosInput.length ; i++){
        elementosInput[i].addEventListener("blur", comprobarDatosInput);
    }

    var elementosSelect = document.getElementsByTagName('select');
    for (var i = 0 ; i<elementosSelect.length ; i++){
        elementosSelect[i].addEventListener('blur', comprobarDatosSelect);
    }

    var elementosTextArea = document.getElementsByTagName('textarea');
    for (var i = 0 ; i<elementosTextArea.length ; i++){
        elementosTextArea[i].addEventListener('blur', comprobarDatosTextArena);
    }

    function comprobarDatosSelect(){
        var elementos = document.getElementById('nacionalidad');
        var elementoSelecionado = elementos.options.value;
        if(comprobarSelect(elementos) == false){
            alert('Debes selecionar una valor')
        }
    }

    function comprobarDatosTextArena(){
        if(campoVacioTexto(this.value) == false){
            alert('Debes introducir una texto');
        }
    }

    function comprobarDatosInput(){
        if(this.type == 'text'){
            if(campoVacioTexto(this.value) == false){
                if(this.name == 'nombre'){
                    alert('El campo nombre no puede estar vacio'); 
                }else if (this.name == 'apellido1'){
                    alert('El campo primer apellido no puede estar vacio'); 
                }else if (this.name == 'apellido2'){
                    alert('El campo segundo apellido no puede estar vacio'); 

                }else if (this.name == 'usuario'){
                    alert('El campo usuario no puede estar vacio');
                }else if (this.name == 'email1'){
                    alert('Debes rellenar el email');

                }else if (this.name == 'email2'){
                    alert('Debes repetir el email');
                }else if (this.name == 'contrasenya'){
                    alert('Debes introducir una contraseña correcta');
                }else{
                    alert('Debes introducir repetir la  contraseña correcta');
                }
            }
        }else if(this.type == 'radio'){
            var checks = document.getElementsByName("sexo");
            if(comprobarChecks(checks) == false){
                alert('Debes selecionar el sexo')
            }
        }else if(this.type == 'checkbox'){
            if(this.name == 'habilidades'){
                var elementos = document.getElementsByName('habilidades');
                if(comprobarChecks(elementos) == false){
                    alert('Debes minimo una habilidad');
                }
            }else{
                var elementos = document.getElementsByName('idioma');
                if(comprobarChecks(elementos) == false){
                    alert('Debes minimo un idioma');
                } 
            }
        }else if (this.type == 'date'){
            if(campoVacioTexto(this.value) == false){
                alert('Debes introducir una fecha de nacimiento valida');
            }
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
    if (elemento.value != -1){
        return true;
    }else{
        return false;
    }
}

