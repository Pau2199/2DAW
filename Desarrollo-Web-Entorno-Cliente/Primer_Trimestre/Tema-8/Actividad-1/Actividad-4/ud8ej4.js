/*
autor: Pau Llorens Martinez                    

ejercicio: ud8ej4.js
*/

document.addEventListener("DOMContentLoaded", cargar);

function cargar(){

    document.getElementById('enviar').addEventListener('click', enviarDatos);

    function enviarDatos(evento){
        evento.preventDefault();
        var inputs = document.getElementsByTagName('input');
        for (var i = 0 ; i<inputs.length ; i++){
            if((inputs[i].type == 'text') || (inputs[i].type == 'date')){
                if(inputs[i].value != ""){
                    setCookie(inputs[i].name, inputs[i].value, 5);
                }
            }else if(inputs[i].type == 'radio'){
                var checks = document.getElementsByName('sexo');
                if(comprobarChecks(checks) != ""){
                    setCookie(inputs[i].name, comprobarChecks(checks),5)
                }
            }else if (inputs[i].type == 'checkbox'){
                var habilidades = document.getElementsByName('habilidades');
                agregarCookieCheckBox(habilidades);
                var idiomas = document.getElementsByName('idioma');
                agregarCookieCheckBox(idiomas);
            }

            if(document.getElementById('comentario').innerHTML != ""){
                setCookie(document.getElementById('comentario').name, document.getElementById('comentario').value, 5);
            }

            var elementos = document.getElementById('nacionalidad');
            var elementoSelecionado = elementos.selectedIndex
            if(comprobarSelect(elementos.options[elementoSelecionado].value) == true){
                setCookie('nacionalidad', elementos.options[elementoSelecionado].text, 5);
            }
        }

    }

}

function comprobarChecks(checks){
    var estaSel="";
    for (var i = 0 ; i<checks.length ; i++){
        if(checks[i].checked == true){
            estaSel = checks[i].value;
            break;
        }
    }
    return estaSel;


}

function agregarCookieCheckBox(checks){
    for (var i = 0 ; i<checks.length ; i++){
        if(checks[i].checked == true){
            setCookie(checks[i].value , true , 5);
        }else{
            setCookie(checks[i].value , false , 5);
        }
    }

}

function comprobarSelect(elemento){
    if (elemento != -1){
        return true;
    }else{
        return false;
    }
}
